import * as _ from "lodash";

var DOMParser = require("xmldom").DOMParser;

function firstOrDefault(collection, pred) {
  if (!pred) {
    return collection.length > 0 ? collection[0] : null;
  }
  for (let i = 0; i < collection.length; i++) {
    if (pred(collection[i])) {
      return collection[i];
    }
  }
  return null;
}

function findChild(elem, tagName) {
  if (!elem) {
    return null;
  }
  const children = elem.getElementsByTagNameNS("*", tagName);
  return children.length > 0 ? children[0].childNodes[0].data : null;
}

export function parseSamlMetadata(xml) {
  var doc = new DOMParser().parseFromString(xml);

  const entityDescriptorCollection = doc.getElementsByTagNameNS(
    "*",
    "EntityDescriptor"
  );

  if (entityDescriptorCollection.length === 0) {
    throw new Error("No entity descriptors found in saml");
  }
  if (entityDescriptorCollection.length > 1) {
    throw new Error("More than one entity descriptor found in saml");
  }
  const entityDescriptor = entityDescriptorCollection[0];

  const wantAssertionsSigned = entityDescriptor.getAttribute(
    "WantAssertionsSigned"
  );
  const audience = entityDescriptor.getAttribute("entityID");

  const assertionConsumerServiceCollection = doc.getElementsByTagNameNS(
    "*",
    "AssertionConsumerService"
  );

  const postBinding = "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST";

  const assertionConsumerService = firstOrDefault(
    assertionConsumerServiceCollection,
    x => x.getAttribute("Binding") === postBinding
  );

  const recipient = assertionConsumerService
    ? assertionConsumerService.getAttribute("Location")
    : null;
  const binding = assertionConsumerService
    ? assertionConsumerService.getAttribute("Binding")
    : null;

  const keyDescriptorCollection = doc.getElementsByTagNameNS(
    "*",
    "KeyDescriptor"
  );
  const signingKey = firstOrDefault(
    keyDescriptorCollection,
    x => x.getAttribute("use") === "signing"
  );

  const signingCert = findChild(signingKey, "X509Certificate");

  const nameIdFormat = findChild(doc, "NameIDFormat");

  const logOutServicesCollection = doc.getElementsByTagNameNS(
    "*",
    "SingleLogoutService"
  );
  const logoutService = firstOrDefault(
    logOutServicesCollection,
    x => x.getAttribute("Binding") === postBinding
  );
  const logoutCallback = logoutService
    ? logoutService.getAttribute("Location")
    : null;

  const organizationCollection = doc.getElementsByTagNameNS(
    "*",
    "Organization"
  );
  const org =
    organizationCollection.length > 0 ? organizationCollection[0] : null;
  const organization = org
    ? {
        name: findChild(org, "OrganizationDisplayName"),
        displayName: findChild(org, "OrganizationDisplayName"),
        organizationUrl: findChild(org, "OrganizationURL")
      }
    : null;

  const contactCollection = doc.getElementsByTagNameNS("*", "ContactPerson");
  const contacts = [];
  for (let i = 0; i < contactCollection.length; i++) {
    const c = contactCollection[i];
    const contact = {
      contactType: findChild(c, "contactType"),
      company: findChild(c, "Company"),
      givenName: findChild(c, "GivenName"),
      surname: findChild(c, "SurName"),
      emailAddress: findChild(c, "EmailAddress"),
      telephoneNumber: findChild(c, "TelephoneNumber")
    };
    contacts.push(contact);
  }

  const metaData = {
    config: _.pickBy(
      {
        audience: audience,
        recipient: recipient,
        destination: recipient,
        binding: binding,
        signingCert: signingCert,
        nameIdFormat: nameIdFormat,
        logoutCallback: logoutCallback,
        signResponse: !wantAssertionsSigned
      },
      _.identity
    ),
    meta: _.pickBy(
      {
        organization: organization,
        contacts: contacts
      },
      _.identity
    )
  };

  return metaData;
}

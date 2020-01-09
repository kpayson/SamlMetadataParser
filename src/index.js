import "./styles.css";
//import {parser} from './parser';
import { nihLoginSaml } from "./test-data/nihLoginSPMetadata";
import { test2Saml } from "./test-data/test2";
import { testIdSaml } from "./test-data/samlTestId";

import * as _ from "lodash";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

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

console.log("hello");
var DOMParser = require("xmldom").DOMParser;

const xml = test2Saml; //testIdSaml; //test2Saml; //nihLoginSaml;

var doc = new DOMParser().parseFromString(xml);
//console.log(doc);
const ns =
  'urn:oasis:names:tc:SAML:2.0:metadata" validUntil="2020-01-04T18:37:34Z';

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

const nameIdFormatCollection = doc.getElementsByTagNameNS("*", "NameIDFormat");
const nameIdFormat =
  nameIdFormatCollection.length > 0 ? nameIdFormatCollection[0] : "";

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

const organizationCollection = doc.getElementsByTagNameNS("*", "Organization");
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

//return metaData;

//entityDescriptor.getAttributeNS()//.getAttribute("xmlns")

//console.log("entityDescriptor=" + entityDescriptor);
//console.log("xmlns=" + xmlns)
console.log("wantsAssertionSigned=" + wantAssertionsSigned);

//.getAttribute("wantAssertionsSigned")
// const wantAssertionsSigned =
// get(entityDescriptor, '["$"].WantAssertionsSigned') === 'true';

//console.log("entityDescriptor=" + entityDescriptor)
//.getElementsByName("EntitiesDescriptor")

console.log("assertionConsumerService=" + assertionConsumerService);

console.log(metaData);

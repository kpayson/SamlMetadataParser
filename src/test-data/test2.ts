export const test2Saml = `<?xml version="1.0"?>
  <md:EntityDescriptor xmlns:md="urn:oasis:names:tc:SAML:2.0:metadata" validUntil="2020-01-04T18:37:34Z" cacheDuration="PT604800S" entityID="MyEntityId">
    <md:SPSSODescriptor AuthnRequestsSigned="false" WantAssertionsSigned="false" protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">
      <md:KeyDescriptor use="signing">
        <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
          <ds:X509Data>
            <ds:X509Certificate>test2TCCAq2gAwIBAgIUMfpAfnuzPZ8Aksqv2pK//sWnLfkwDQYJKoZIhvcNAQELBQAwcjELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAk1EMRIwEAYDVQQHDAlSb2NrdmlsbGUxETAPBgNVBAoMCGxhYnNoYXJlMQ0wCwYDVQQDDARrcDJxMSAwHgYJKoZIhvcNAQkBFhFrcGF5c29uQGdtYWlsLmNvbTAeFw0yMDAxMDIxNzU0NTFaFw0yOTEyMzAxNzU0NTFaMHIxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJNRDESMBAGA1UEBwwJUm9ja3ZpbGxlMREwDwYDVQQKDAhsYWJzaGFyZTENMAsGA1UEAwwEa3AycTEgMB4GCSqGSIb3DQEJARYRa3BheXNvbkBnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBSIb3DQEJARYRa3BheXNvbkBnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDEENi51ZRYorhjSauG7XpVw+vY+CglVU+7EJAP95PZ+hTAdHvqTjZYwboaKgq9sxRB2PlgmSGNmdV6gWWVW5AQlHw/Af74p8Zj0EdN3WBgjIvcZttBQJ4jpOzwMWoA6m3u4dmChZAQKcqFJQABtoXtGEXhendVa7S5xdCiHVbd87lflIdI3jhIw7QUoodezODlxhbUVhopYBS9T/GvKk42aHk/ZjQfUqUciiJ9UG4ZUuY7eaO2ScxsRoKRAuBv59qi6FONrFnZrlQGNKchEzepT8RaPVZDNbU2+EMT2iKfuo7930qc+IbOZqz0EdxuHfcpyJc0NLohMiKGoM1xrRknAgMBAAGjUzBRMB0GA1UdDgQWBBT5PuGDnM5/4TRKNDMSjx7Zg9MzBDAfBgNVHSMEGDAWgBT5PuGDnM5/4TRKNDMSjx7Zg9MzBDAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQA0L0+LJTB5p1SYKImukskikkzTu+q22LvJAFinzROZdg9gng55EiFpbloW8ydVkLxgpWfQ5KSF3+UaTegz7zHK31rH6U9GxE3z/wV+ZWX37H0MS/bmyoXRGHvw6YoW4iQijXzR1OwjWUTuc04Uh2VPIw5eAtoWBasdJl2Xd8rVu4Rh6pcMPxFOgfwKTgylaBRZFNeW6EgxUw3o85yLDluPLZhlQBLSKKnBI/QXEYq/fXqP/jjyAsveJjy3gSL8+v1PXJhmbK2EMCbqJfA7AtRfXfg/cfALhiCt+zPeOOtBwpR0pNXLrjiM+cQD47HaAy+i2ItaUtImgtZlcw6xf1Ue</ds:X509Certificate>
          </ds:X509Data>
        </ds:KeyInfo>
      </md:KeyDescriptor>
      <md:KeyDescriptor use="encryption">
        <ds:KeyInfo xmlns:ds="http://www.w3.org/2000/09/xmldsig#">
          <ds:X509Data>
            <ds:X509Certificate>test2CCAq2gAwIBAgIUMfpAfnuzPZ8Aksqv2pK//sWnLfkwDQYJKoZIhvcNAQELBQAwcjELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAk1EMRIwEAYDVQQHDAlSb2NrdmlsbGUxETAPBgNVBAoMCGxhYnNoYXJlMQ0wCwYDVQQDDARrcDJxMSAwHgYJKoZIhvcNAQkBFhFrcGF5c29uQGdtYWlsLmNvbTAeFw0yMDAxMDIxNzU0NTFaFw0yOTEyMzAxNzU0NTFaMHIxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJNRDESMBAGA1UEBwwJUm9ja3ZpbGxlMREwDwYDVQQKDAhsYWJzaGFyZTENMAsGA1UEAwwEa3AycTEgMB4GCSqGSIb3DQEJARYRa3BheXNvbkBnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBSIb3DQEJARYRa3BheXNvbkBnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDEENi51ZRYorhjSauG7XpVw+vY+CglVU+7EJAP95PZ+hTAdHvqTjZYwboaKgq9sxRB2PlgmSGNmdV6gWWVW5AQlHw/Af74p8Zj0EdN3WBgjIvcZttBQJ4jpOzwMWoA6m3u4dmChZAQKcqFJQABtoXtGEXhendVa7S5xdCiHVbd87lflIdI3jhIw7QUoodezODlxhbUVhopYBS9T/GvKk42aHk/ZjQfUqUciiJ9UG4ZUuY7eaO2ScxsRoKRAuBv59qi6FONrFnZrlQGNKchEzepT8RaPVZDNbU2+EMT2iKfuo7930qc+IbOZqz0EdxuHfcpyJc0NLohMiKGoM1xrRknAgMBAAGjUzBRMB0GA1UdDgQWBBT5PuGDnM5/4TRKNDMSjx7Zg9MzBDAfBgNVHSMEGDAWgBT5PuGDnM5/4TRKNDMSjx7Zg9MzBDAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQA0L0+LJTB5p1SYKImukskikkzTu+q22LvJAFinzROZdg9gng55EiFpbloW8ydVkLxgpWfQ5KSF3+UaTegz7zHK31rH6U9GxE3z/wV+ZWX37H0MS/bmyoXRGHvw6YoW4iQijXzR1OwjWUTuc04Uh2VPIw5eAtoWBasdJl2Xd8rVu4Rh6pcMPxFOgfwKTgylaBRZFNeW6EgxUw3o85yLDluPLZhlQBLSKKnBI/QXEYq/fXqP/jjyAsveJjy3gSL8+v1PXJhmbK2EMCbqJfA7AtRfXfg/cfALhiCt+zPeOOtBwpR0pNXLrjiM+cQD47HaAy+i2ItaUtImgtZlcw6xf1Ue</ds:X509Certificate>
          </ds:X509Data>
        </ds:KeyInfo>
      </md:KeyDescriptor>
      <md:SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-Redirect" Location="http://logout.google.com"/>
      <md:NameIDFormat>urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified</md:NameIDFormat>
      <md:AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://saml-test.com" index="1"/>
    </md:SPSSODescriptor>
    <md:Organization>
      <md:OrganizationName xml:lang="en-US">LabShare</md:OrganizationName>
      <md:OrganizationDisplayName xml:lang="en-US">Axle Info Labshare</md:OrganizationDisplayName>
      <md:OrganizationURL xml:lang="en-US">https://www.axleinformatics.com</md:OrganizationURL>
    </md:Organization>
    <md:ContactPerson contactType="technical">
      <md:GivenName>Joe Tech</md:GivenName>
      <md:EmailAddress>joetect@gmail.com</md:EmailAddress>
    </md:ContactPerson>
    <md:ContactPerson contactType="support">
      <md:GivenName>Mike Support</md:GivenName>
      <md:EmailAddress>MikeSupport@gmail.com</md:EmailAddress>
    </md:ContactPerson>
  </md:EntityDescriptor>`;

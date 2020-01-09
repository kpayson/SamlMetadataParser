import { nihLoginSaml } from "./test-data/nihLoginSPMetadata";
import { test2Saml } from "./test-data/test2";
import { testIdSaml } from "./test-data/samlTestId";

import { parseSamlMetadata } from "./parser";

describe("tests", () => {
  it("should pass", () => {
    expect(1).toEqual(1);
  });

  it("should parse test2Saml correctly", () => {
    const xml = test2Saml;
    const res = parseSamlMetadata(xml);
    expect(res).toEqual({
      config: {
        audience: "MyEntityId",
        recipient: "https://saml-test.com",
        destination: "https://saml-test.com",
        binding: "urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST",
        signingCert:
          "test2TCCAq2gAwIBAgIUMfpAfnuzPZ8Aksqv2pK//sWnLfkwDQYJKoZIhvcNAQELBQAwcjELMAkGA1UEBhMCVVMxCzAJBgNVBAgMAk1EMRIwEAYDVQQHDAlSb2NrdmlsbGUxETAPBgNVBAoMCGxhYnNoYXJlMQ0wCwYDVQQDDARrcDJxMSAwHgYJKoZIhvcNAQkBFhFrcGF5c29uQGdtYWlsLmNvbTAeFw0yMDAxMDIxNzU0NTFaFw0yOTEyMzAxNzU0NTFaMHIxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJNRDESMBAGA1UEBwwJUm9ja3ZpbGxlMREwDwYDVQQKDAhsYWJzaGFyZTENMAsGA1UEAwwEa3AycTEgMB4GCSqGSIb3DQEJARYRa3BheXNvbkBnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBSIb3DQEJARYRa3BheXNvbkBnbWFpbC5jb20wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDEENi51ZRYorhjSauG7XpVw+vY+CglVU+7EJAP95PZ+hTAdHvqTjZYwboaKgq9sxRB2PlgmSGNmdV6gWWVW5AQlHw/Af74p8Zj0EdN3WBgjIvcZttBQJ4jpOzwMWoA6m3u4dmChZAQKcqFJQABtoXtGEXhendVa7S5xdCiHVbd87lflIdI3jhIw7QUoodezODlxhbUVhopYBS9T/GvKk42aHk/ZjQfUqUciiJ9UG4ZUuY7eaO2ScxsRoKRAuBv59qi6FONrFnZrlQGNKchEzepT8RaPVZDNbU2+EMT2iKfuo7930qc+IbOZqz0EdxuHfcpyJc0NLohMiKGoM1xrRknAgMBAAGjUzBRMB0GA1UdDgQWBBT5PuGDnM5/4TRKNDMSjx7Zg9MzBDAfBgNVHSMEGDAWgBT5PuGDnM5/4TRKNDMSjx7Zg9MzBDAPBgNVHRMBAf8EBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQA0L0+LJTB5p1SYKImukskikkzTu+q22LvJAFinzROZdg9gng55EiFpbloW8ydVkLxgpWfQ5KSF3+UaTegz7zHK31rH6U9GxE3z/wV+ZWX37H0MS/bmyoXRGHvw6YoW4iQijXzR1OwjWUTuc04Uh2VPIw5eAtoWBasdJl2Xd8rVu4Rh6pcMPxFOgfwKTgylaBRZFNeW6EgxUw3o85yLDluPLZhlQBLSKKnBI/QXEYq/fXqP/jjyAsveJjy3gSL8+v1PXJhmbK2EMCbqJfA7AtRfXfg/cfALhiCt+zPeOOtBwpR0pNXLrjiM+cQD47HaAy+i2ItaUtImgtZlcw6xf1Ue",
        nameIdFormat: "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified",
        signResponse: true
      },

      meta: {
        organization: {
          name: "Axle Info Labshare",
          displayName: "Axle Info Labshare",
          organizationUrl: "https://www.axleinformatics.com"
        },
        contacts: [
          {
            contactType: null,
            company: null,
            givenName: "Joe Tech",
            surname: null,
            emailAddress: "joetect@gmail.com",
            telephoneNumber: null
          },
          {
            contactType: null,
            company: null,
            givenName: "Mike Support",
            surname: null,
            emailAddress: "MikeSupport@gmail.com",
            telephoneNumber: null
          }
        ]
      }
    });
  });
});

export const keyCloakSaml = `<EntityDescriptor xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://keycloak-ci.aws.labshare.org/auth/realms/dev">
   <SPSSODescriptor AuthnRequestsSigned="true" WantAssertionsSigned="true"
           protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol urn:oasis:names:tc:SAML:1.1:protocol http://schemas.xmlsoap.org/ws/2003/07/secext">
       <KeyDescriptor use="signing">
         <dsig:KeyInfo xmlns:dsig="http://www.w3.org/2000/09/xmldsig#">
           <dsig:KeyName>jRBS07tcB42cRlvXGUp6r02YTTqE-sl4eUUyellzwRU</dsig:KeyName>
           <dsig:X509Data>
             <dsig:X509Certificate>MIIClTCCAX0CBgFt1ez/9TANBgkqhkiG9w0BAQsFADAOMQwwCgYDVQQDDANkZXYwHhcNMTkxMDE2MTg1NDAyWhcNMjkxMDE2MTg1NTQyWjAOMQwwCgYDVQQDDANkZXYwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCdqYg2F8CFKKLnYVzpYI+HqpniE6rEl3h2GtcYbGK1LG4xKJgWr8Kb3+CEQRJQrj2aLBfZEshTGpzeiPye168CRV+TsViE88ReHDMji9FsxzIPTj28EJmFMNkhizM6gszA+69Ku29+VVmdVwFQejkCrofgK4ddS0XRPfsf1FjUbckwxUtcnb+LEXLiPK6gDcqa9Re4ZaQi2qfP94/FuXnCDknCdiUO+VrhIidm2MD9MUZfGw3O2xklrshtngPWlo3dgckHf7Nkf6+C6I5BFh5FHeBFi1HsJYd1R0uzkCXV+I6N2I69aiX8afHLDpxbtmphGVnefNtj6MxWtAo6rPUVAgMBAAEwDQYJKoZIhvcNAQELBQADggEBAAPenwDUxORtwkFnhI5jnwvBGORywDpukTRjJT80Dg37MEDPS2gib1CV3ETCWXjLdffclx06VrrkCWPl3CgRrg3RYlfysCG8ULk5AyhNnF9IHY1Epy/er28XEvy5EtB3w3qShbw8X95M/2/0S/ewJUxfrLT4FnZGz7SjpOsXkQzbDtuul2UImj2VgQ3a0GJJQdBua+FWnYCJCwM4d7C4wXS6RX1i43/nzgh93pLcUtQ/l5cVi+U1cZCb/YzvWKEqxzMjG8qDE4+oNeTzQklYrsC3iaFW4cUvSO+H6yT5Y8CEt4eAdXiR7wGbt3PYV5llMDmFCqcFT2Ik6/0Se6ozOi4=</dsig:X509Certificate>
           </dsig:X509Data>
         </dsig:KeyInfo>
       </KeyDescriptor>
       <SingleLogoutService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://keycloak-ci.aws.labshare.org/auth/realms/dev/broker/saml/endpoint"/>
       <NameIDFormat>urn:oasis:names:tc:SAML:2.0:nameid-format:persistent
       </NameIDFormat>
       <AssertionConsumerService
               Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://keycloak-ci.aws.labshare.org/auth/realms/dev/broker/saml/endpoint"
               index="1" isDefault="true" />
   </SPSSODescriptor>
</EntityDescriptor>`;

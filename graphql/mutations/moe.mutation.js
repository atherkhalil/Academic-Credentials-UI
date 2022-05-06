import { gql } from "@apollo/client";

export const UpdateMoeDetails = gql`
    mutation UpdateMoeDetails($name: String!, $telephone: String!, $contactEmail: String!, $siteUrl: String) {
        UpdateMoeDetails(name: $name, telephone: $telephone, contactEmail: $contactEmail, siteUrl: $siteUrl) {
            id
            name
            adminEmail
        }
    }
`;
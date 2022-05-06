import { gql } from "@apollo/client";

export const LernerOnboarding = gql`
    mutation LernerOnboarding($data: lernerOnboarding) {
        LernerOnboarding(data: $data)
    }
`;

export const UpdateIssuerDetails = gql`
    mutation UpdateIssuerDetails(
        $type: String!
        $name: String!
        $contactEmail: String!
        $address: Address!
        $telephone: String
        $siteUrl: String
        $description: String
    ) {
        UpdateIssuerDetails(
            type: $type
            name: $name
            contactEmail: $contactEmail
            address: $address
            telephone: $telephone
            siteUrl: $siteUrl
            description: $description
        ) {
            id
            moeId
        }
    }
`;
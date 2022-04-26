import { gql } from "@apollo/client";

export const GetPendingIssuerRequests = gql`
    query GetPendingIssuerRequests {
        GetPendingIssuerRequests {
        id
        moeId
        type
        name
        adminEmail
        telephone
        approved
        }
    }
`;


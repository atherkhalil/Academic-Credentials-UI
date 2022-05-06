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

export const GetCoursesByIssuer = gql`
    query GetCoursesByIssuer {
        GetCoursesByIssuer {
        id
        issuerId
        courseTitle
        session
        description
        creditHours
        code
        active
        createdAt
        updatedAt
        }
    }
`;

export const GetAllIssuerDetail = gql`
    query GetIssuerDetail($issuerId: ID!) {
        GetIssuerDetail(issuerId: $issuerId) {
            id
            moeId
            type
            name
            adminEmail
            contactEmail
            telephone
            siteUrl
            logoUrl
            publicKey
            approved
            approvalDate
            description
            revocationList
            isVerified
            createdAt
            updatedAt
            address {
                country
                city
                street
            }
            signature {
              imageUrl
              uploadDate
            }
        }
    }
`;
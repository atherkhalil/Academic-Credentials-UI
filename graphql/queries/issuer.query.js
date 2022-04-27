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
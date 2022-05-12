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
        duration
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

export const GetLearnersByIssuer = gql`
    query GetLearnersByIssuer {
        GetLearnersByIssuer {
        id
        firstName
        lastName
        }
    }
`;

export const GetCourseByID = gql`
    query GetCourseByID($courseId: String) {
        GetCourseByID(courseId: $courseId) {
        id
        issuerId
        courseTitle
        duration
        creditHours
        code
        description
        active
        createdAt
        level
        faculty
        updatedAt
        }
    }
`;
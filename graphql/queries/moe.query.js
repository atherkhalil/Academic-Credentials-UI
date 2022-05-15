import { gql } from "@apollo/client";

export const GetAllCredentials = gql`
    query GetCredentials {
        GetCredentials {
        id
        type
        courseId
        faculty
        level
        title
        description
        creditHours
        cgpa
        issuanceDate
        expiryDate
        session
        credentialUrl
        issuer {
            id
            type
            name
            url
            address {
            country
            city
            street
            }
        }
        learner {
            id
            registrationNumber
            courseRegistrationNumber
            firstName
            lastName
        }
        }
    }
`;
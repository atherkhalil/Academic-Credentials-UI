import { gql } from "@apollo/client";

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

export const GetAllLearnerDetail = gql`
    query GetLearnerDetail($learnerId: ID!) {
        GetLearnerDetail(learnerId: $learnerId) {
        id
        firstName
        lastName
        dob
        gender
        telephone
        email
        address {
            country
            city
            street
        }
        isVerified
        courses {
            id
            courseRegistrationNumber
            registrationNumber
            courseId
            status
            issuerId
        }
        signature {
            imageUrl
            uploadDate
        }
        createdAt
        updatedAt
        qrCode
        publicKey
        }
    }
`;

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

export const GetCredentialBYId = gql`
    query GetCredentialBYId($credentialId: String) {
        GetCredentialBYId(credentialId: $credentialId) {
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
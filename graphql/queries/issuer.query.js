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
            privateKey
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
            moeId
            moeName
            moePublicKey
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

export const GetCredentialsBYCourseId = gql`
    query GetCredentialsBYCourseId($courseId: String) {
        GetCredentialsBYCourseId(courseId: $courseId) {
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

export const GetLearnersByIssuer = gql`
    query GetLearnersByIssuer {
        GetLearnersByIssuer {
        id
        firstName
        lastName
        dob
        gender
        telephone
        email
        isVerified
        createdAt
        updatedAt
        qrCode
        publicKey
        privateKey
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
        privateKey
        }
    }
`;
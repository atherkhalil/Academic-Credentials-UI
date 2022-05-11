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

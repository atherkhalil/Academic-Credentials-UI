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
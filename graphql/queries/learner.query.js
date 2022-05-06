import { gql } from "@apollo/client";

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
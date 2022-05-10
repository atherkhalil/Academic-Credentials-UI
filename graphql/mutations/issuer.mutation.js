import { gql } from "@apollo/client";

export const AddCourse = gql`
    mutation AddCourse($data: AddCourse) {
        AddCourse(data: $data) {
        id
        issuerId
        courseTitle
        creditHours
        session
        code
        description
        active
        createdAt
        updatedAt
        }
    }
`;

export const UpdateCourseStatus = gql`
    mutation UpdateCourseStatus($courseId: ID!, $active: Boolean!) {
        UpdateCourseStatus(courseId: $courseId, active: $active) {
        id
        issuerId
        courseTitle
        session
        creditHours
        code
        description
        active
        createdAt
        updatedAt
        }
    }
`;

export const LernerOnboarding = gql`
    mutation LernerOnboarding($data: lernerOnboarding) {
        LernerOnboarding(data: $data)
    }
`;
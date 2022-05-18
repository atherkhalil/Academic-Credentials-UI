import { gql } from "@apollo/client";

export const AddCourse = gql`
    mutation AddCourse($data: AddCourse) {
        AddCourse(data: $data) {
        id
        issuerId
        courseTitle
        creditHours
        duration
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
        duration
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

export const CreateCredentials = gql`
    mutation CreateCredentials($data: CreateCredential!) {
        createCredentials(data: $data)  {
        credentialId
        txnId
        }
    }
`;

export const CourseByID = gql`
    mutation CourseByID($courseId: String) {
        CourseByID(courseId: $courseId) {
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

export const UpdateIssuerDetails = gql`
    mutation UpdateIssuerDetails($type: String!, $name: String!, $contactEmail: String!, $telephone: String, $address: Address!, $siteUrl: String, $description: String) {
        UpdateIssuerDetails(type: $type, name: $name, contactEmail: $contactEmail, telephone: $telephone, address: $address, siteUrl: $siteUrl, description: $description) {
        id
        }
    }
`;

export const UpdateLearnerCourseStatus = gql`
    mutation UpdateLearnerCourseStatus($learnerId: String!, $courseId: String!, $status: String!) {
        UpdateLearnerCourseStatus(learnerId: $learnerId, courseId: $courseId, status: $status)
    }
`;
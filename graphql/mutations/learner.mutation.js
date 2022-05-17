import { gql } from "@apollo/client";

export const LernerOnboarding = gql`
    mutation LernerOnboarding($data: lernerOnboarding) {
        LernerOnboarding(data: $data)
    }
`;

export const UpdateLearnerDetails = gql`
    mutation UpdateLearnerDetails($firstName: String!, $lastName: String!, $dob: String!, $gender: String!, $telephone: String, $address: Address) {
        UpdateLearnerDetails(firstName: $firstName, lastName: $lastName, dob: $dob, gender: $gender, telephone: $telephone, address: $address) {
        id
        }
    }
`;
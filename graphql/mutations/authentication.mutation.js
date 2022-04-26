import { gql } from "@apollo/client";

// ===== MOE ======
export const MoeOnBoardingMutation = gql`
    mutation MoeOnBoarding($data: MoeOnBoarding) {
        MoeOnBoarding(data: $data)
    }
`;

export const ActivateMOEMutation = gql`
mutation ActivateMOE($opt: String!, $moeId: String!) {
    ActivateMOE(opt: $opt, moeId: $moeId)
}
`;

export const SetMoePasswordMutation = gql`
mutation SetMoePassword($password: String!, $confirmPassword: String!) {
    SetMoePassword(password: $password, confirmPassword: $confirmPassword)
}
`;

export const MOELoginMutation = gql`
mutation MOELogin($password: String!, $email: String!) {
    MOELogin(password: $password, email: $email) {
        Moe {
            publicKey
        }
        token
    }
}
`;

// ===== Issuer ======
export const IssuerOnBoardingMutation = gql`
    mutation IssuerOnBoarding($data: IssuerOnBoarding) {
        IssuerOnBoarding(data: $data)
    }
`;
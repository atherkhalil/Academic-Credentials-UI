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

export const ApprovedIssuer = gql`
mutation ApprovedIssuer($issuerId: ID!, $approved: Boolean!) {
    ApprovedIssuer(issuerId: $issuerId, approved: $approved)
}
`;

export const ActivateIssuerMutation = gql`
mutation ActivateIssuer($otp: String!, $issuerId: String!) {
    ActivateIssuer(otp: $otp, issuerId: $issuerId)
}
`;

export const ActivateIssuer = gql`
mutation ActivateIssuer($otp: String!, $issuerId: String!) {
    ActivateIssuer(otp: $otp, issuerId: $issuerId)
}
`;

export const SetIssuerPassword = gql`
mutation SetIssuerPassword($password: String!, $confirmPassword: String!) {
    SetIssuerPassword(password: $password, confirmPassword: $confirmPassword)
}
`;

export const IssuerLogin = gql`
    mutation IssuerLogin($email: String!, $password: String!) {
        IssuerLogin(email: $email, password: $password) {
            token
        }
    }
`;

// ==== Learner =====
export const ActivateLearner = gql`
    mutation ActivateLearner($otp: String!, $learnerId: String!) {
        ActivateLearner(otp: $otp, learnerId: $learnerId)
    }
`;


export const SetLearnerPassword = gql`
mutation SetLearnerPassword($password: String!, $confirmPassword: String!) {
    SetLearnerPassword(password: $password, confirmPassword: $confirmPassword)
  }
`;

export const LearnerLogin = gql`
    mutation LearnerLogin($email: String!, $password: String!) {
        LearnerLogin(email: $email, password: $password) {
        token
        }
    }
`;
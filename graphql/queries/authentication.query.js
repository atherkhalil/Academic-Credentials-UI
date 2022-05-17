import { gql } from "@apollo/client";

export const GetMOEDetailsQuery = gql`
  query GetMOEDetails($moeId: String) {
    GetMOEDetails(moeId: $moeId) {
      id
      isVerified
      qrCode
      contactEmail
      adminEmail
    }
  }
`;

export const GetAllMOEDetailsQuery = gql`
query GetMOEDetails($moeId: String) {
  GetMOEDetails(moeId: $moeId) {
    id
    name
    adminEmail
    telephone
    contactEmail
    publicKey
    privateKey
    logoUrl
    siteUrl
    signature {
      imageUrl
      uploadDate
    }
    isVerified
    createdAt
    updatedAt
    qrCode
    secret {
      ascii
      hex
      base32
      otpauth_url
    }
  }
}
`;

export const GetIssuerDetail = gql`
  query GetIssuerDetail($issuerId: ID!) {
    GetIssuerDetail(issuerId: $issuerId) {
      id
      isVerified
      qrCode
      adminEmail
    }
  }
`;


export const GetLearnerDetail = gql`
  query GetLearnerDetail($learnerId: ID!) {
    GetLearnerDetail(learnerId: $learnerId) {
      id
      isVerified
      qrCode
      email
    }
  }
`;
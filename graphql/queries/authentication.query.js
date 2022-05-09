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
      publicKey
      contactEmail
      logoUrl
      siteUrl
      isVerified
      createdAt
      updatedAt
      signature {
        imageUrl
        uploadDate
      }
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
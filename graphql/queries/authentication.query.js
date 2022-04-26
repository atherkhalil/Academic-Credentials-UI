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
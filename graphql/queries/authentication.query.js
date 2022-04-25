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
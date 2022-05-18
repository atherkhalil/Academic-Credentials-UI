import { gql } from "@apollo/client";

export const UpdateMoeDetails = gql`
    mutation UpdateMoeDetails($name: String!, $telephone: String!, $contactEmail: String!, $siteUrl: String) {
        UpdateMoeDetails(name: $name, telephone: $telephone, contactEmail: $contactEmail, siteUrl: $siteUrl) {
            id
            name
            adminEmail
        }
    }
`;

export const GetCredentialsForCards = gql`
mutation GetCredentialsForCards {
    GetCredentialsForCards {
      id
      title
      cards {
        id
        type
        courseId
        faculty
        level
        title
        description
        creditHours
        cgpa
        issuanceDate
        expiryDate
        session
        credentialUrl
        issuer {
          id
          type
          name
          url
          address {
            country
            city
            street
          }
        }
        learner {
          id
          registrationNumber
          courseRegistrationNumber
          firstName
          lastName
        }
        moe {
          moeId
          moeName
          publicKey
        }
        credentialTrackingStatus {
          currentStatus
          created {
            status
            date
          }
          issuerSign {
            status
            date
            publicKey
            issuerECDSA {
              signingDate
              r
              s
              k
            }
          }
          learnerSign {
            status
            date
            publicKey
            learnerECDSA {
              signingDate
              r
              s
              k
            }
          }
          moeSign {
            status
            date
            publicKey
            moeECDSA {
              signingDate
              r
              s
              k
            }
          }
        }
      }
    }
  }
`;
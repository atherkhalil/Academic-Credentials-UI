import { gql } from "@apollo/client";

export const SignatureUpload = gql`
    mutation SignatureUpload($file: Upload!) {
        SignatureUpload(file: $file)
    }
`;

export const SignCredentials = gql`
    mutation SignCredentials($credentialId: String) {
        signCredentials(credentialId: $credentialId)
    }
`;
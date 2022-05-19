import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSnackbar } from "notistack";
import SignWithKeyInput from "../../elements/SignWithKeyInput";
import * as Yup from "yup";

// const initialValues = {
//   signature: "69e387f1-31c3-45ad-9c68-5a51e5e78b43-69e387f1-31c3-45ad-9c68-5a51e5e78b4345ad-9c68-5a51e5e78b43-69e387f1-31c3-45ad-9c68-5a51e5e78b4345ad-9c68-5a51e5e78b43-69e387f1-31c3-45ad-9c68-5a51e5e78b43",
// };

const SignFormSchema = Yup.object().shape({
  signature: Yup.string().required("Digital Signature is required"),
});

const SignWithKeyModal = ({ toggle, setToggle, _handleSignCredential, privateKey, createdCredentialTxId, showTxId }) => {
  return (
    <>
      <Modal
        isOpen={toggle}
        centered
        toggle={() => setToggle()}
        backdrop="static"
      >
        <ModalBody>
          <h4 className="text-center text-primary" style={{ 
            display: "block", 
            overflowWrap: "break-word", 
            maxWidth : "100%"
           }}>
            Confirm to Digitally sign the credential using ECDSA Algorithm
          </h4>
          <h5 className="text-center">
            <span className="text-primary">Transaction Id: </span> <span className="text-muted" style={{ fontWeight: 400 }}>{showTxId && createdCredentialTxId}</span>
          </h5>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <div style={{ padding: 30 }}>
              <img
                src="/images/favpng_contract-clip-art.png"
                alt=""
                width="100px"
              />
            </div>
          </div>
          <SignWithKeyInput
            initialValues={{
              signature: privateKey
            }}
            SignFormSchema={SignFormSchema}
            handleSubmit={_handleSignCredential}
            loading={false}
          />
        </ModalBody>
      </Modal>
    </>
  );
};

export default SignWithKeyModal;

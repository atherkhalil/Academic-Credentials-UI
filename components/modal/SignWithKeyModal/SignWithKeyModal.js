import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SignWithKeyModal = ({ toggle, setToggle, _handleSignCredential }) => {
  return (
    <>
      <Modal
        isOpen={toggle}
        centered
        toggle={() => setToggle()}
        backdrop="static"
      >
        <ModalBody>
          <h5 className="text-center text-primary">
            Please enter your digital signature to sign credential
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
                src="/images/sign-image.png"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-primary mr-2"
            onClick={() => _handleSignCredential(otp)}
          >
            Sign
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SignWithKeyModal;

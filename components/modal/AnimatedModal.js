import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Animatedmodal = ({ toggle, setToggle, headerTitle, BodyComponent, FooterComponent }) => {
  return (
    <>
      <Modal isOpen={toggle} centered toggle={() => setToggle(!toggle)}>
        <ModalHeader toggle={() => setToggle(!toggle)}>
          {headerTitle}
        </ModalHeader>
        <ModalBody>
          <BodyComponent />
        </ModalBody>
        <ModalFooter>
          <FooterComponent />
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Animatedmodal;
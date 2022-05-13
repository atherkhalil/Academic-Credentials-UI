import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useSnackbar } from "notistack";
import SignWithKeyInput from "../../elements/SignWithKeyInput";
import { Spinner } from "reactstrap";
import * as Yup from "yup";

const SignFormSchema = Yup.object().shape({
  signature: Yup.string().required("Digital Signature is required"),
});

const ECDSAVerficationModal = ({ state, toggle, setToggle, _handleECDSAVerification, eCDSAVerficationState }) => {
  return (
    <>
      <Modal
        isOpen={toggle}
        centered
        toggle={() => setToggle()}
        backdrop="static"
        size="xl"
      >
        <ModalBody>
          <div className="container-fluid">
            <div className="row">
              <div className="col-5">
                <div><h6 className="text-primary">Issuer Signature Details</h6></div>
                <div className="row mb-20">
                  <label className="form-label col-lg-3">K</label>
                  <div className="col-lg-9">
                    <input
                      name="issuerECDSA.k"
                      className="form-control col-lg-9"
                      type="text"
                      value={state.issuerECDSA.k}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mb-20">
                  <label className="form-label col-lg-3">R</label>
                  <div className="col-lg-9">
                    <input
                      name="issuerECDSA.r"
                      className="form-control col-lg-9"
                      type="text"
                      value={state.issuerECDSA.k}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mb-20">
                  <label className="form-label col-lg-3">S</label>
                  <div className="col-lg-9">
                    <input
                      name="issuerECDSA.s"
                      className="form-control col-lg-9"
                      type="text"
                      value={state.issuerECDSA.k}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mb-20">
                  <label className="form-label col-lg-3">Signing Date</label>
                  <div className="col-lg-9">
                    <input
                      name="issuerECDSA.signingDate"
                      className="form-control col-lg-9"
                      type="text"
                      value={state.issuerECDSA.signingDate}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mb-20 justify-content-center text-center">
                  {
                    eCDSAVerficationState.issuer.verified ?
                    <i class="ri-check-double-line ri-lg text-primary"></i> :
                  <Spinner children=""></Spinner>
                  }
                </div>
              </div>

              <div className="col-2 d-flex flex-row justify-content-center">
              <div className="vl" style={{ 
                borderLeft: "1px solid #d6d8da",
                height: "auto"
               }}></div>
               </div>

              <div className="col-5">
                <div><h6 className="text-primary">Student Signature Details</h6></div>
                <div className="row mb-20">
                  <label className="form-label col-lg-3">K</label>
                  <div className="col-lg-9">
                    <input
                      name="learnerECDSA.k"
                      className="form-control col-lg-9"
                      type="text"
                      value={state.learnerECDSA.k}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mb-20">
                  <label className="form-label col-lg-3">R</label>
                  <div className="col-lg-9">
                    <input
                      name="learnerECDSA.r"
                      className="form-control col-lg-9"
                      type="text"
                      value={state.learnerECDSA.k}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mb-20">
                  <label className="form-label col-lg-3">S</label>
                  <div className="col-lg-9">
                    <input
                      name="learnerECDSA.s"
                      className="form-control col-lg-9"
                      type="text"
                      value={state.learnerECDSA.k}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mb-20">
                  <label className="form-label col-lg-3">Signing Date</label>
                  <div className="col-lg-9">
                    <input
                      name="learnerECDSA.signingDate"
                      className="form-control col-lg-9"
                      type="text"
                      value={state.learnerECDSA.signingDate}
                      disabled={true}
                    />
                  </div>
                </div>
                <div className="row mb-20 justify-content-center text-center">
                  {
                    eCDSAVerficationState.learner.verified ?
                    <i class="ri-check-double-line ri-lg text-primary"></i> :
                  <Spinner children=""></Spinner>
                  }
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ECDSAVerficationModal;

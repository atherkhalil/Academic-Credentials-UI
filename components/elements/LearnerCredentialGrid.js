import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
} from "reactstrap";
import Link from "next/link";
import EmptyData from "../general/EmptyData.js";
import Switch from "react-switch";
import moment from "moment";
import { downloadCredentialPdf } from "../../services/files.service.js";
import { truncateString } from "../../shared/helper.js";

function LearnerCredentialGrid({ credentialList, _handleCourseStatusUpdate }) {
  return (
    <>
      {credentialList?.map((item, index) => (
        <>
          <div className="col-12" key={index}>
            <div className="card course-card">
              <div className="card-body courses-details">
                <div className="container-fluid">
                  <div className="row">
                      <h5>{item.title}</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="courses-details-info d-flex justify-content-left">
                        <div className="courses-details-info-box">
                          <i class="ri-calendar-check-fill"></i>
                          <span>Study period: {item.session}</span>
                        </div>
                        <div className="courses-details-info-box">
                          <i class="ri-government-line"></i>
                          <span>Board: {item.Board}</span>
                        </div>
                        <div className="courses-details-info-box">
                          <i class="ri-timer-2-line"></i>
                          <span>Issuance Date: {moment(parseInt(item.issuanceDate)).format("MMMM Do YYYY")}</span>
                        </div>
                      </div>
                      <p>{truncateString(item.description, 200)}</p>
                      <span><b>{item.type}</b></span>
                      <br />
                      <br />
                      <span>                        
                        {item.status ? (
                          <span className="text-primary">Verified</span>
                        ) : (
                          <span className="text-warning">Unverified</span>
                        )}
                      </span>
                    </div>
                    <div className="col-lg-3">
                      <IssuerCard state={item.issuer} />
                    </div>
                    <div className="col-lg-3">
                      <LearnerCard state={item.learner} />
                    </div>
                  </div>
                </div>

                <div className="courses-action d-flex flex-row justify-content-end">
                  <div>
                    <Link href={"credentials/" + item.id}>
                      <a className="btn btn-primary text-white"><i class="ri-eye-fill cursor-pointer align-middle"></i> Details</a>
                    </Link>
                    {/* <i onClick={() => downloadCredentialPdf(item.credentialUrl)} class="ri-file-download-fill ri-xl cursor-pointer align-middle" style={{ marginRight: "10px" }}></i> */}
                    <button onClick={() => downloadCredentialPdf(process.env.NEXT_PUBLIC_CREDENTIAL_URL + item.credentialUrl)} className="btn btn-success mb-4 "><i class="ri-file-download-fill cursor-pointer ri-xl align-middle"></i>Download</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      {credentialList?.length == 0 && <EmptyData />}
    </>
  );
}

const IssuerCard = ({ state }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h5 className="m-0 text-muted">Issuer</h5>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mr-2">
        <div className="col-4">
          <i class="ri-government-line ri-3x"></i>
        </div>
        <div className="col-8">
          <span className="m-0 text-muted">{state.type}</span>
          <h5 className="m-0 text-muted">{state.name}</h5>
        </div>
      </div>
    </div>
  )
} 

const LearnerCard = ({ state }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h5 className="m-0 text-muted">Learner</h5>
        </div>
      </div>
      <div className="d-flex flex-row align-items-center mr-2">
        <div className="col-4">
          <i class="ri-shield-user-line ri-3x"></i>
        </div>
        <div className="col-8">
          <span className="m-0 text-muted">{state.registrationNumber}</span>
          <h5 className="m-0 text-muted">{state.firstName} {state.lastName}</h5>
          <span className="m-0 text-muted">{state.courseRegistrationNumber}</span>
        </div>
      </div>
    </div>
  )
} 

export default LearnerCredentialGrid;
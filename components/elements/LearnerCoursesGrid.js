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

function LearnerCoursesGrid({ coursesList, _handleCourseStatusUpdate }) {
  return (
    <>
      {coursesList?.map((item, index) => (
        <>
          <div className="col-lg-6" key={index}>
            <div className="card course-card">
              <div className="card-body courses-details">
                <h5>{item.courseTitle}</h5>
                <div className="courses-details-info d-flex justify-content-left">
                  <div className="courses-details-info-box">
                    <i class="ri-calendar-check-fill"></i>
                    <span>Duration: {item.duration}</span>
                  </div>
                  <div className="courses-details-info-box">
                    <i class="ri-timer-2-line"></i>
                    <span>Credit Hours: {item.creditHours}</span>
                  </div>
                  <div className="courses-details-info-box">
                    <i class="ri-grid-fill"></i>
                    <span>Code: {item.code}</span>
                  </div>
                </div>
                <p>{item.description}</p>
                {item.active ? (
                  <span className="text-primary">Active</span>
                ) : (
                  <span className="text-warning">Inactive</span>
                )}
                <div className="courses-action d-flex flex-row justify-content-end">
                  <div>
                    <Link href={"courses/" + item.id}>
                      <a className="btn btn-primary text-white">Details</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
      {coursesList?.length == 0 && <EmptyData />}
    </>
  );
}
export default LearnerCoursesGrid;

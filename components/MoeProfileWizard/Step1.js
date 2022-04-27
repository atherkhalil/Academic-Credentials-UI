import React from "react";
import UpdateInfo from "../form/UpdateInfo";
import PersonalInfo from "../form/PersonalInfo";
import UpdateAvatar from "../form/UpdateAvatar";

const Step1 = () => {
  return (
    <div className="row">
      <div className="col-xxl-6 col-xl-6 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">User Profile</h4>
          </div>
          <div className="card-body">
            <UpdateAvatar />
          </div>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Update Profile</h4>
          </div>
          <div className="card-body">
            <UpdateInfo />
          </div>
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Personal Information</h4>
          </div>
          <div className="card-body">
            <PersonalInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;

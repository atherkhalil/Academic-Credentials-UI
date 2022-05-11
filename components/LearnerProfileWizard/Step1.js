import React from "react";
import UpdateInfo from "../form/UpdateInfo";
import IssuerPersonalInfo from "../form/IssuerPersonalInfo";
import UpdateAvatar from "../form/UpdateAvatar";

const Step1 = ({ currentUserData, ProfileSchema, _handleSubmit }) => {
  console.log("currentUserData: ", currentUserData);
  return (
    <div className="row">
      <div className="col-xxl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Personal Information</h4>
          </div>
          <div className="card-body">
            <IssuerPersonalInfo
              currentUserData={currentUserData}
              ProfileSchema={ProfileSchema}
              _handleSubmit={_handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;

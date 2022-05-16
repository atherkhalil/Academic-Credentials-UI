import React from "react";
import UpdateInfo from "../form/UpdateInfo";
import MoePersonalInfo from "../form/MoePersonalInfo";
import UpdateAvatar from "../form/UpdateAvatar";

const Step1 = ({ currentUserData, ProfileSchema, _handleSubmit }) => {
  return (
    <div className="row">
      <div className="col-xxl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Profile Information</h4>
          </div>
          <div className="card-body">
            <MoePersonalInfo
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

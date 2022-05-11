import React, { useState } from "react";
import Switch from "react-switch";
import { truncateString } from "../../shared/helper.js";

const Step3 = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Your Digital Signatures</h4>
      </div>
      <div className="card-body">
        <DigitalSignatureCard 
          state={{ key: "69e387f1-31c3-45ad-9c68-5a51e5e78b43-69e387f1-31c3-45ad-9c68-5a51e5e78b43", status: true }} 
          showAll={showAll}
          setShowAll={setShowAll}
        />
      </div>
    </div>
  );
};

const DigitalSignatureCard = ({ state, showAll, setShowAll }) => {
  return (
    <div className="card course-card border border-primary">
      <div className="card-body courses-details">
        <p>{showAll ? state.key : truncateString(state.key, 50)}</p>

        <div className="d-flex flex-row justify-content-between">
          {state.status ? (
            <span className="text-primary">Active</span>
          ) : (
            <span className="text-warning">Inactive</span>
          )}

          {/* <Switch
            onChange={() =>
              _handleCourseStatusUpdate(state.id, state.active, index)
            }
            checked={state.active}
          /> */}
          <span className="text-success cursor-pointer" onClick={() => setShowAll(!showAll)}>{!showAll ? "View more" : "Hide" }</span>
        </div>
      </div>
    </div>
  )
}

export default Step3;

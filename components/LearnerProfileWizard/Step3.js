import React, { useState } from "react";
import Switch from "react-switch";
import { truncateString } from "../../shared/helper.js";

const Step3 = () => {
  const [showValue, setShowValue] = useState({
    showPrivateKey: false,
    showPublicKey: false
  });

  const _handleShowValue = (field) => {
    setShowValue({
      ...showValue,
      [field]: !showValue[field]
    })
  }

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Your Digital Signatures</h4>
      </div>
      <div className="card-body">
        <DigitalSignatureCard 
          state={{ 
            privateKey: "69e387f1-31c3-45ad-9c68-5a51e5e78b43-69e387f1-31c3-45ad-9c68-5a51e5e78b43", 
            publicKey: "69e387f1-31c3-45ad-9c68-5a51e5e78b43-69e387f1-31c3-45ad-9c68-5a51e5e78b43", 
            address: "69e387f11c345ad9c685a51e5e78b43", 
            status: true 
          }} 
          showValue={showValue}
          _handleShowValue={_handleShowValue}
        />
      </div>
    </div>
  );
};

const DigitalSignatureCard = ({ state, showValue, _handleShowValue }) => {
  return (
    <div className="card">
      <div className="card-body courses-details">
        <p>
          <span className="text-dark">Private Key: &nbsp;</span>
          {showValue.showPrivateKey ? state.privateKey : truncateString(state.privateKey, 50)}
          <span 
            className="text-success cursor-pointer" 
            style={{ marginLeft: "8px" }} 
            onClick={() => _handleShowValue("showPrivateKey")}>
              {!showValue.showPrivateKey ? "View more" : "Hide" }
          </span>
        </p>
        <p>
          <span className="text-dark">Public Key: &nbsp;</span> 
          {showValue.showPublicKey ? state.publicKey : truncateString(state.publicKey, 50)}
        <span 
          className="text-success cursor-pointer" 
          style={{ marginLeft: "8px" }} 
          onClick={() => _handleShowValue("showPublicKey")}>
            {!showValue.showPublicKey ? "View more" : "Hide" }
          </span>
          </p>
        <p>
          <span className="text-dark">Address: &nbsp;</span> 
          {state.address}</p>
      </div>
    </div>
  )
}

export default Step3;

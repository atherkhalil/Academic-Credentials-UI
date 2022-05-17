import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import CreateApi from "../form/CreateApi";

const Step2 = ({ currentUserData, _handleSubmit, _handleSignatureFileChange }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Upload Signature</h4>
        </div>
        <div className="card-body">
          <form>
            <input
              name="file"
              type="file"
              onChange={_handleSignatureFileChange}
              className={"form-control col-lg-9"}
            />

            <div className="text-end mt-16">
              <button type="button" onClick={() => _handleSubmit()} className="btn btn-primary mr-2">
                Update
              </button>
            </div>
          </form>

          <div className="mt-10">
            <img src={currentUserData?.signature?.imageUrl || "/images/signature.jpg"} width="260px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;

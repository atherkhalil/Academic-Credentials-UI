import React, { useState } from "react";
import Switch from "react-switch";
import { truncateString } from "../../shared/helper.js";
import { downloadCredentialPdf } from "../../services/files.service.js";
import { bulkCredentialUploadFileName } from "../../shared/constants.js";

const Step2 = ({ currentUserData, _handleSubmit, _handleBulkCredentialFileChange }) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Upload Bulk Courses</h4>
          <button onClick={() => downloadCredentialPdf(process.env.NEXT_PUBLIC_FRONTEND + bulkCredentialUploadFileName)} className="btn btn-success mb-4 "><i class="ri-file-download-fill cursor-pointer ri-xl align-middle"></i>Download format</button>
        </div>
        <div className="card-body">
          <form>
            <input
              name="file"
              type="file"
              onChange={_handleBulkCredentialFileChange}
              className={"form-control col-lg-9"}
            />

            <div className="text-end mt-16">
              <button type="button" onClick={() => _handleSubmit()} className="btn btn-primary mr-2">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Step2;

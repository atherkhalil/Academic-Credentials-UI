import React from "react";

const Step3 = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Your Digital Signatures</h4>
      </div>
      <div className="card-body">
        <div className="table-responsive api-table">
          <table className="table">
            <thead>
              <tr>
                <th>Key</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={true}
                    />
                  </div>
                </td>
                <td>
                  <span>
                    <i className="ri-delete-bin-line"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                <td>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <span>
                    <i className="ri-delete-bin-line"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                <td>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <span>
                    <i className="ri-delete-bin-line"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                <td>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <span>
                    <i className="ri-delete-bin-line"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                <td>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <span>
                    <i className="ri-delete-bin-line"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Step3;

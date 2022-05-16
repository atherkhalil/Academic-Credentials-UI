import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "reactstrap";
import CustomTextarea from "../general/CustomTextArea.js";
import { credentialTypes, issuersList } from "../../shared/constants.js";
import Select from 'react-select';

function CredentialDetail({
  CredentialFormSchema,
  initialValues,
  _handleCredentialUpdate,
  context,
  student,
  setStudent,
  studentError,
  _handleStudent,
  issuer,
  setIssuer,
  issuerError,
  studentsList
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CredentialFormSchema}
        onSubmit={(fields) => _handleCredentialUpdate(fields)}
        enableReinitialize={true}
      >
        {({ errors, status, touched }) => {
          return (
            <Form>
              <div><h6 className="text-primary">Credential Details</h6></div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Credential Type</label>
                <div className="col-lg-9">
                  <Field
                    name="type"
                    type="text"
                    className={
                      "form-control" +
                      (errors.type &&
                        touched.type
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Credential Title</label>
                <div className="col-lg-9">
                  <Field
                    name="title"
                    type="text"
                    className={
                      "form-control col-lg-9" +
                      (errors.title && touched.title
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Credential Description</label>
                <div className="col-lg-9">
                  <CustomTextarea
                    label=""
                    name="description"
                    rows="3"
                    placeholder="Enter description..."
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Study period</label>
                <div className="col-lg-9">
                  <Field
                    name="session"
                    type="text"
                    className={
                      "form-control col-lg-9" +
                      (errors.session && touched.session
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Level</label>
                <div className="col-lg-9">
                  <Field
                    name="level"
                    type="text"
                    className={
                      "form-control col-lg-9" +
                      (errors.level && touched.level
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Credit Hours</label>
                <div className="col-lg-9">
                  <Field
                    name="creditHours"
                    type="number"
                    className={
                      "form-control col-lg-9" +
                      (errors.creditHours && touched.creditHours
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">CGPA</label>
                <div className="col-lg-9">
                  <Field
                    name="cgpa"
                    type="text"
                    className={
                      "form-control col-lg-9" +
                      (errors.cgpa && touched.cgpa
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Issuance Date</label>
                <div className="col-lg-9">
                  <Field
                    name="issuanceDate"
                    type="text"
                    className={
                      "form-control col-lg-9" +
                      (errors.issuanceDate && touched.issuanceDate
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Expiry Date</label>
                <div className="col-lg-9">
                  <Field
                    name="expiryDate"
                    type="text"
                    className={
                      "form-control col-lg-9" +
                      (errors.expiryDate && touched.expiryDate
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">College</label>
                <div className="col-lg-9">
                  <Field
                    name="faculty"
                    type="text"
                    className={
                      "form-control col-lg-9" +
                      (errors.faculty && touched.faculty
                        ? " is-invalid"
                        : "")
                    }
                    disabled={true}
                  />
                </div>
              </div>

              <hr className="my-20" />

              {/* Issuer info start */}
              <div><h6 className="text-primary">Issuer Details</h6></div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Issuer Type</label>
                <div className="col-lg-9">
                  <Field
                    name="issuer.type"
                    type="text"
                    className="form-control col-lg-9"
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Issuer Name</label>
                <div className="col-lg-9">
                  <Field
                    name="issuer.name"
                    type="text"
                    className="form-control col-lg-9"
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Url</label>
                <div className="col-lg-9">
                  <Field
                    name="issuer.url"
                    type="text"
                    className="form-control col-lg-9"
                    disabled={true}
                  />
                </div>
              </div>
              {/* Issuer info end */}

              <hr className="my-20" />

              {/* Issuer info start */}
              <div><h6 className="text-primary">Student Details</h6></div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Registration No.</label>
                <div className="col-lg-9">
                  <Field
                    name="learner.registrationNumber"
                    type="text"
                    className="form-control col-lg-9"
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Course Registration No.</label>
                <div className="col-lg-9">
                  <Field
                    name="learner.courseRegistrationNumber"
                    type="text"
                    className="form-control col-lg-9"
                    disabled={true}
                  />
                </div>
              </div>
              <div className="row mb-20">
                <label className="form-label col-lg-3">Learner Name</label>
                <div className="col-lg-9">
                  <input
                    name="firstName"
                    value={`${initialValues?.learner?.firstName} ${initialValues?.learner?.lastName}`}
                    type="text"
                    className="form-control col-lg-9"
                    disabled={true}
                  />
                </div>
              </div>


              {initialValues?.credentialTrackingStatus?.issuerSign && initialValues?.credentialTrackingStatus?.learnerSign && initialValues?.credentialTrackingStatus?.moeSign && (
                <>
              <hr className="my-20" />
                <div><h4 className="text-primary my-20">Signature Details</h4></div>
                </>
              )}

              {
                initialValues?.credentialTrackingStatus?.issuerSign && (
                  <>
                    <div><h6 className="text-primary">Issuer Signature Details</h6></div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">K</label>
                      <div className="col-lg-9">
                        <Field
                          name="issuerECDSA.k"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">R</label>
                      <div className="col-lg-9">
                        <Field
                          name="issuerECDSA.r"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">S</label>
                      <div className="col-lg-9">
                        <Field
                          name="issuerECDSA.s"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">Signing Date</label>
                      <div className="col-lg-9">
                        <Field
                          name="issuerECDSA.signingDate"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                  </>
                )
              }

              {
                initialValues?.credentialTrackingStatus?.learnerSign && (
                  <>
                    <div><h6 className="text-primary">Student Signature Details</h6></div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">K</label>
                      <div className="col-lg-9">
                        <Field
                          name="learnerECDSA.k"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">R</label>
                      <div className="col-lg-9">
                        <Field
                          name="learnerECDSA.r"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">S</label>
                      <div className="col-lg-9">
                        <Field
                          name="learnerECDSA.s"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">Signing Date</label>
                      <div className="col-lg-9">
                        <Field
                          name="learnerECDSA.signingDate"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                  </>
                )
              }

              {
                initialValues?.credentialTrackingStatus?.moeSign && (
                  <>
                    <div><h6 className="text-primary">MOE Signature Details</h6></div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">K</label>
                      <div className="col-lg-9">
                        <Field
                          name="moeECDSA.k"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">R</label>
                      <div className="col-lg-9">
                        <Field
                          name="moeECDSA.r"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">S</label>
                      <div className="col-lg-9">
                        <Field
                          name="moeECDSA.s"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                    <div className="row mb-20">
                      <label className="form-label col-lg-3">Signing Date</label>
                      <div className="col-lg-9">
                        <Field
                          name="moeECDSA.signingDate"
                          type="text"
                          className="form-control col-lg-9"
                          disabled={true}
                        />
                      </div>
                    </div>
                  </>
                )}
            </Form>
          )
        }}
      </Formik>
    </>
  );
}

export default CredentialDetail;
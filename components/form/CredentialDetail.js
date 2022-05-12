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
          console.log("Form errors:", errors)
          return (
            <Form>
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
              <label className="form-label col-lg-3">Student</label>
              <div className="col-lg-9">
                <Field
                  name="learnerName"
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
              <label className="form-label col-lg-3">Session</label>
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
              <label className="form-label col-lg-3">Faculty</label>
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
          </Form>
          )
        }}
      </Formik>
    </>
  );
}

export default CredentialDetail;
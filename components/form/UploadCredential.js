import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "reactstrap";
import CustomTextarea from "../general/CustomTextArea.js";
import { credentialTypes, issuersList } from "../../shared/constants.js";
import Select from 'react-select';

function UploadCredential({
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
  studentsList,
  _handleCancel
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
            <div className="row mb-20">
              <label className="form-label col-lg-3">Credential Type</label>
              <div className="col-lg-9">
                <Field
                  name="type"
                  as="select"
                  type="string"
                  className={
                    "form-control" +
                    (errors.type &&
                      touched.type
                      ? " is-invalid"
                      : "")
                  }
                >
                  <option value="" selected>Select credential type</option>
                  {
                    credentialTypes.map((cred, index) => (
                      <option key={index} value={cred}>{cred}</option>
                    ))
                  }
                </Field>
                <ErrorMessage
                  name="type"
                  component="div"
                  className="invalid-feedback"
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
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="invalid-feedback"
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
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Student</label>
              <div className="col-lg-9">
                <Select
                  value={student}
                  onChange={(val) => setStudent(val)}
                  options={studentsList.map((student, index) => ({ value: student.id, label: `${student.firstName} ${student.lastName}` }))}
                />
                {studentError ? (
                  <div className="error text-danger">{studentError}</div>
                ) : null}
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
                />
                <ErrorMessage
                  name="session"
                  component="div"
                  className="invalid-feedback"
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
                />
                <ErrorMessage
                  name="level"
                  component="div"
                  className="invalid-feedback"
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
                />
                <ErrorMessage
                  name="creditHours"
                  component="div"
                  className="invalid-feedback"
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
                />
                <ErrorMessage
                  name="cgpa"
                  component="div"
                  className="invalid-feedback"
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
                />
                <ErrorMessage
                  name="faculty"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">MOE Name</label>
              <div className="col-lg-9">
                <Field
                  name="moeName"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.moeName && touched.moeName
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="moeName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">MOE Public Key</label>
              <div className="col-lg-9">
                <Field
                  name="moePublicKey"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.moePublicKey && touched.moePublicKey
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="moePublicKey"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <hr className="my-20" />

            {context !== "edit" && (
              <div className="row mt-16">
                <div className="col-lg-3"></div>

                <div className="col-lg-9">
                  <Button type="submit" color="primary" className="me-10">
                    Create
                  </Button>{" "}
                  <Button onClick={_handleCancel} color="danger">Cancel</Button>{" "}
                </div>
              </div>
            )}
          </Form>
          )
        }}
      </Formik>
    </>
  );
}
export default UploadCredential;

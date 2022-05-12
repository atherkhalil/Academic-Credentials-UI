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
                />
                <ErrorMessage
                  name="session"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Board</label>
              <div className="col-lg-9">
                <Field
                  name="Board"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.Board && touched.Board
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="Board"
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
              <label className="form-label col-lg-3">Expiry Date</label>
              <div className="col-lg-9">
                <Field
                  name="expiryDate"
                  type="date"
                  className={
                    "form-control col-lg-9" +
                    (errors.expiryDate && touched.expiryDate
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="expiryDate"
                  component="div"
                  className="invalid-feedback"
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
                />
                <ErrorMessage
                  name="faculty"
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
                  <Button color="danger">Cancel</Button>{" "}
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

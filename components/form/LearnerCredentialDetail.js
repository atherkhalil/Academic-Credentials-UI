import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "reactstrap";

function LearnerCredentialDetail({
  CourseFormSchema,
  initialValues,
  context,
  _handleVerify
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CourseFormSchema}
        onSubmit={(fields) => _handleVerify(fields)}
        enableReinitialize={true}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div><h6 className="text-primary">Credential Details</h6></div>
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
                <Field
                  name="description"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.description && touched.description
                      ? " is-invalid"
                      : "")
                  }
                  disabled={true}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Credential Type</label>
              <div className="col-lg-9">
                <Field
                  name="type"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.type && touched.type
                      ? " is-invalid"
                      : "")
                  }
                  disabled={true}
                />
                <ErrorMessage
                  name="type"
                  component="div"
                  className="invalid-feedback"
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
                    (errors.issuanceDate && touched.issuanceDate ? " is-invalid" : "")
                  }
                  disabled={true}
                />
                <ErrorMessage
                  name="issuanceDate"
                  component="div"
                  className="invalid-feedback"
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
                    (errors.session && touched.session ? " is-invalid" : "")
                  }
                  disabled={true}
                />
                <ErrorMessage
                  name="session"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            {/* Credential info end */}

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
                  value={`${initialValues?.learner.firstName} ${initialValues?.learner.lastName}`}
                  type="text"
                  className="form-control col-lg-9"
                  disabled={true}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default LearnerCredentialDetail;

import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "reactstrap";

function UploadCourse({
  CourseFormSchema,
  initialValues,
  _handleCourseUpdate,
  context,
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CourseFormSchema}
        onSubmit={(fields) => _handleCourseUpdate(fields)}
        enableReinitialize={true}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Course Title</label>
              <div className="col-lg-9">
                <Field
                  name="courseTitle"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.courseTitle && touched.courseTitle
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="courseTitle"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Course Description</label>
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
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Course Session</label>
              <div className="col-lg-9">
                <Field
                  name="session"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.session && touched.session ? " is-invalid" : "")
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
              <label className="form-label col-lg-3">Course Credit Hours</label>
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
              <label className="form-label col-lg-3">Course Code</label>
              <div className="col-lg-9">
                <Field
                  name="code"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.code && touched.code ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="code"
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
                  <Button color="primary" className="me-10">
                    Create
                  </Button>{" "}
                  <Button color="danger">Cancel</Button>{" "}
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
export default UploadCourse;

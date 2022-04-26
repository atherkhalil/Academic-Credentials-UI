import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneNumber from "../general/PhoneNumber.js";
import { Spinner } from "reactstrap";

function MoeSigninForm({
  initialValues,
  SignupFormSchema,
  handleSubmit,
  loading,
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupFormSchema}
        onSubmit={(fields) => handleSubmit(fields)}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="row">
              <div className="col-12 mb-16">
                <label className="form-label">Email</label>
                <Field
                  name="adminEmail"
                  type="text"
                  className={
                    "form-control" +
                    (errors.adminEmail && touched.adminEmail
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="adminEmail"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-12 mb-16">
                <label className="form-label">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="mt-16 d-grid gap-2">
              <button type="submit" className="btn btn-primary mr-2">
                {loading ? <Spinner children=""></Spinner> : "Sign in"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default MoeSigninForm;

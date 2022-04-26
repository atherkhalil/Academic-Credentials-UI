import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { Spinner } from "reactstrap";

function SigninForm({
  initialValues,
  SigninFormSchema,
  handleSubmit,
  loading
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SigninFormSchema}
        onSubmit={(fields) => {
          handleSubmit(fields);
        }}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="row">              
              <div className="col-12 mb-16">
                <label className="form-label">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
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
              <div className="col-6">
                <div className="form-check">
                  <Field
                    type="checkbox"
                    name="acceptTerms"
                    className={"form-check-input "}
                  />
                  <label className="form-check-label">Remember me</label>
                </div>
              </div>
              <div className="col-6 text-end">
                <Link href="/reset">
                  <a>Forgot Password?</a>
                </Link>
              </div>
            </div>

            <div className="mt-16 d-grid gap-2">
              <button type="submit" className="btn btn-primary mr-2">
                {loading ? <Spinner children=""></Spinner> : "Sign In"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default SigninForm;

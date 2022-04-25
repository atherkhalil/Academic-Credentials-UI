import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneNumber from "../general/PhoneNumber.js";
import { Spinner } from "reactstrap";

function MoeSignupForm({
  //   initialValues,
  //   SignupFormSchema,
  //   handleSubmit,
  //   loading,

  initialValues,
  OTPSchema,
  _handleOTP,
  loading
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={OTPSchema}
        onSubmit={(fields) => _handleOTP(fields)}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="row">
              <div className="col-12 mb-16">
                <label className="form-label">OTP</label>
                <Field
                  name="otp"
                  type="text"
                  className={
                    "form-control" +
                    (errors.otp && touched.otp ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="otp"
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

export default MoeSignupForm;

import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneNumber from "../general/PhoneNumber.js";
import { Spinner } from "reactstrap";

function MoeSignupForm({
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
                <label className="form-label">Enter OTP</label>

                <div class="input-group mb-3">
                  <PhoneNumber
                    name="otp"
                    type="text"
                    className={
                      "form-control" +
                      (errors.otp && touched.otp ? " is-invalid" : "")
                    }
                    format="######"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-primary"
                      style={{
                        height: "100%",
                        borderRadius: "0px 5px 5px 0px",
                      }}
                      type="submit"
                    >
                      {loading ? <Spinner children=""></Spinner> : "Verify"}
                    </button>
                  </div>
                  <ErrorMessage
                    name="otp"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default MoeSignupForm;

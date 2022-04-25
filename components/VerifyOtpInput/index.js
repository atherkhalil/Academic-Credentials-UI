import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Spinner } from "reactstrap";

const VerifyOtpInput = ({ initialValues, OTPSchema, _handleOTP, loading }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={OTPSchema}
      onSubmit={(fields) => {
        _handleOTP(fields);
      }}
    >
      {({ errors, status, touched }) => (
        <Form>
          <div className="row p-4 m-4">
            <div className="col-12">
              <div class="input-group mb-3">
                <Field
                  name="otp"
                  type="text"
                  className={
                    "form-control" +
                    (errors.otp && touched.otp ? " is-invalid" : "")
                  }
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    style={{ height: "100%", borderRadius: "0px 5px 5px 0px" }}
                    type="submit"
                  >
                    {loading ? <Spinner children=""></Spinner> : "Verify"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default VerifyOtpInput;

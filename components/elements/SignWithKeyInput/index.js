import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneNumber from "../../general/PhoneNumber.js";
import { Spinner } from "reactstrap";

function SignWithKeyInput({
  initialValues,
  SignFormSchema,
  handleSubmit,
  loading,
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignFormSchema}
        onSubmit={(fields) => handleSubmit(fields)}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="row px-12">
              <div className="col-12 mb-16">
                <div class="input-group mb-3">
                  <Field
                    name="signature"
                    type="text"
                    placeholder="Enter Digital Signature"
                    className={
                      "form-control" +
                      (errors.signature && touched.signature ? " is-invalid" : "")
                    }
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
                      {loading ? <Spinner children=""></Spinner> : "Sign"}
                    </button>
                  </div>
                  <ErrorMessage
                    name="signature"
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

export default SignWithKeyInput;

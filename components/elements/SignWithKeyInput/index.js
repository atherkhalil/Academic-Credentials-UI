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
                <label className="form-label">Private key</label>
                <p className="border rounded border-secondary bg-light p-8">{initialValues.signature}</p>
                <div class="row justify-content-center">
                  <button
                    class="btn btn-primary"
                    style={{
                      height: "100%",
                      borderRadius: "0px 5px 5px 0px",
                      width: "80px"
                    }}
                    type="submit"
                  >
                    {loading ? <Spinner children=""></Spinner> : "Sign"}
                  </button>
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

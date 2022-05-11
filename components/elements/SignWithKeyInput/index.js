import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneNumber from "../../general/PhoneNumber.js";
import { Spinner } from "reactstrap";
import CustomTextArea from "../../general/CustomTextArea.js";

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
            <CustomTextArea 
              className="form-control text-area" 
              name="signature"
              label=""
              rows="3"
              disabled={true}
            />

            <div className="row justify-content-end px-16 pt-8">
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
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SignWithKeyInput;

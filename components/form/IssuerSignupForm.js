import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import PhoneNumber from "../general/PhoneNumber.js";
import { Spinner } from "reactstrap";
import Customtextarea from "../general/CustomTextArea.js";

function IssuerSignupForm({
  initialValues,
  SignupFormSchema,
  handleSubmit,
  loading,
  issuerTypes
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
                <label className="form-label">Name</label>
                <Field
                  name="type"
                  as="select"
                  className={
                    "form-control" +
                    (errors.type && touched.type
                      ? " is-invalid"
                      : "")
                  }
                >
                  <option selected>Please Select</option>
                  {
                    issuerTypes.map((type, index) => (
                      <option value={type} key={index}>{type}</option>
                    ))
                  }
                </Field>
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-12 mb-16">
                <label className="form-label">Name</label>
                <Field
                  name="name"
                  type="text"
                  className={
                    "form-control" +
                    (errors.name && touched.name ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

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
                <label className="form-label">Telephone no.</label>
                <PhoneNumber
                  name="telephone"
                  type="text"
                  className={
                    "form-control" +
                    (errors.telephone && touched.telephone ? " is-invalid" : "")
                  }
                  format={"+97# ## ### ####"}
                />

                <ErrorMessage
                  name="telephone"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-12 mb-16">
                <label className="form-label">Site Url</label>
                <Field
                  name="siteUrl"
                  type="text"
                  className={
                    "form-control" +
                    (errors.siteUrl && touched.siteUrl ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="siteUrl"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-12 mb-16">
                <label className="form-label">Description</label>
                <Customtextarea
                  label=""
                  name="description"
                  rows="3"
                  placeholder="Enter description..."
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-12">
                <div className="form-check">
                  <Field
                    type="checkbox"
                    name="acceptTerms"
                    className={
                      "form-check-input " +
                      (errors.acceptTerms && touched.acceptTerms
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <label className="form-check-label">
                    I certify that I agree to the{" "}
                    <a href="#" className="text-primary">
                      User Agreement
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary">
                      Privacy Policy
                    </a>
                    .
                  </label>
                  <ErrorMessage
                    name="acceptTerms"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
              </div>
            </div>

            <div className="mt-16 d-grid gap-2">
              <button type="submit" className="btn btn-primary mr-2">
                {loading ? <Spinner children=""></Spinner> : "Sign up"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default IssuerSignupForm;

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
                <label className="form-label">Admin Email</label>
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
                <label className="form-label">Contact Email</label>
                <Field
                  name="contactEmail"
                  type="text"
                  className={
                    "form-control" +
                    (errors.contactEmail && touched.contactEmail
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="contactEmail"
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

export default MoeSignupForm;

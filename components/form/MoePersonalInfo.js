import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneNumber from "../general/PhoneNumber.js";
import * as Yup from "yup";

function MoePersonalInfo({ currentUserData, ProfileSchema, _handleSubmit }) {
  return (
    <>
      <Formik
        initialValues={currentUserData}
        validationSchema={ProfileSchema}
        onSubmit={_handleSubmit}
        enableReinitialize={true}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
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

              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
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

              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
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

              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
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
            </div>

            <div className="mt-16">
              <button type="submit" className="btn btn-primary mr-2">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default MoePersonalInfo;

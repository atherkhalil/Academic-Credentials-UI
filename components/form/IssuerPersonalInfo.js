import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneNumber from "../general/PhoneNumber.js";
import { issuerTypes } from "../../shared/constants.js";
import CustomTextarea from "../general/CustomTextArea.js";
import * as Yup from "yup";

function IssuerPersonalInfo({ currentUserData, ProfileSchema, _handleSubmit }) {
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
                <label className="form-label">Type</label>
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
                  name="publicKey"
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
              
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                <label className="form-label">Country</label>
                <Field
                  name="address.country"
                  type="text"
                  className={
                    "form-control" +
                    (errors.country && touched.country ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="address.country"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                <label className="form-label">City</label>
                <Field
                  name="address.city"
                  type="text"
                  className={
                    "form-control" +
                    (errors.city && touched.city ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="address.city"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                <label className="form-label">Street</label>
                <Field
                  name="address.street"
                  type="text"
                  className={
                    "form-control" +
                    (errors.street && touched.street ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="address.street"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                <label className="form-label">Description</label>
                <CustomTextarea
                  label=""
                  name="description"
                  rows="3"
                  placeholder="Enter description..."
                />
                <ErrorMessage
                  name="telephone"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
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
export default IssuerPersonalInfo;

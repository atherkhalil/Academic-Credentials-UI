import { ErrorMessage, Field, Form, Formik, getIn } from "formik";
import PhoneNumber from "../general/PhoneNumber.js";
import { issuerTypes, genderTypes } from "../../shared/constants.js";
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
                <label className="form-label">First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.firstName && touched.firstName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                <label className="form-label">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lastName && touched.lastName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                <label className="form-label">Email</label>
                <Field
                  name="email"
                  type="email"
                  className={
                    "form-control" +
                    (errors.email && touched.email
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-6 mb-16">
                <label className="form-label">Gender</label>
                <Field
                  name="gender"
                  as="select"
                  type="string"
                  className={
                    "form-control" +
                    (errors.gender &&
                      touched.gender
                      ? " is-invalid"
                      : "")
                  }
                >
                  <option value="" selected>Select gender</option>
                  {
                    genderTypes.map((val, index) => (
                      <option key={index} value={val}>{val}</option>
                    ))
                  }
                </Field>
                <ErrorMessage
                  name="gender"
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
                    "form-control col-lg-9" +
                    (getIn(errors, 'address.country') && getIn(touched, 'address.country')
                      ? " is-invalid" : "")
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
                    "form-control col-lg-9" +
                    (getIn(errors, 'address.city') && getIn(touched, 'address.city')
                      ? " is-invalid" : "")
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
                    "form-control col-lg-9" +
                    (getIn(errors, 'address.street') && getIn(touched, 'address.street')
                      ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="address.street"
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

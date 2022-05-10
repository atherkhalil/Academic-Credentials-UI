import { ErrorMessage, Field, Form, Formik, getIn } from "formik";
import { Button } from "reactstrap";
import Select from 'react-select';
import { genderTypes } from "../../shared/constants.js";
import AddCoursesInEnrollStudentTable from "../AddCoursesInEnrollStudentTable/AddCoursesInEnrollStudentTable.js";

function EnrollStudent({
  StudentFormSchema,
  initialValues,
  _handleCourseUpdate,
  context,
  coursesList,
  courseSelected,
  setCourseSelected,
  courseSelectedError
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={StudentFormSchema}
        onSubmit={(fields) => _handleCourseUpdate(fields)}
        enableReinitialize={true}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div className="row mb-20">
              <label className="form-label col-lg-3">First Name</label>
              <div className="col-lg-9">
                <Field
                  name="firstName"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.firstName && touched.firstName
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Last Name</label>
              <div className="col-lg-9">
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.lastName && touched.lastName
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Email</label>
              <div className="col-lg-9">
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control col-lg-9" +
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
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Gender</label>
              <div className="col-lg-9">
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
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Date of Birth</label>
              <div className="col-lg-9">
                <Field
                  name="dob"
                  type="date"
                  className={
                    "form-control col-lg-9" +
                    (errors.dob && touched.dob
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="dob"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Telephone</label>
              <div className="col-lg-9">
                <Field
                  name="telephone"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.telephone && touched.telephone ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="telephone"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">City</label>
              <div className="col-lg-9">
                <Field
                  name="city"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.city && touched.city ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Country</label>
              <div className="col-lg-9">
                <Field
                  name="country"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (errors.country && touched.country ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            
            <div className="row mb-20">
              <label className="form-label col-lg-3">Student Registration ID</label>
              <div className="col-lg-9">
                <Field
                  name="course.registrationNumber"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (getIn(errors, 'course.registrationNumber') && getIn(touched, 'course.registrationNumber')
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="course.registrationNumber"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="row mb-20">
              <label className="form-label col-lg-3">Course Registration Number</label>
              <div className="col-lg-9">
                <Field
                  name="course.courseRegistrationNumber"
                  type="text"
                  className={
                    "form-control col-lg-9" +
                    (getIn(errors, 'course.courseRegistrationNumber') && getIn(touched, 'course.courseRegistrationNumber')
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="course.courseRegistrationNumber"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
            </div>

            <div className="row mb-20">
              <label className="form-label col-lg-3">Courses</label>
              <div className="col-lg-9">
                <Select
                  value={courseSelected}
                  onChange={(val) => setCourseSelected(val)}
                  options={coursesList.map((course, index) => ({ value: course.id, label: `${course.courseTitle} (${course.code})`, issuerId: course.issuerId }))}
                />
                {courseSelectedError ? (
                  <div className="error text-danger">{courseSelectedError}</div>
                ) : null}
              </div>
            </div>

            <hr className="my-20" />

            {context !== "edit" && (
              <div className="row mt-16">
                <div className="col-lg-3"></div>

                <div className="col-lg-9">
                  <Button type="submit" color="primary" className="me-10">
                    Submit
                  </Button>{" "}
                  <Button color="danger">Cancel</Button>{" "}
                </div>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
export default EnrollStudent;
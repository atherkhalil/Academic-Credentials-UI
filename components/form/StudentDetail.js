import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "reactstrap";
import { Table } from "reactstrap";
import moment from "moment";
import { truncateString } from "../../shared/helper.js";
import { studentCourseStatusList } from "../../shared/constants.js";
import Link from "next/link";

function StudentDetail({
  CourseFormSchema,
  initialValues,
  _handleCourseUpdate,
  context,
}) {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={CourseFormSchema}
        onSubmit={(fields) => _handleCourseUpdate(fields)}
        enableReinitialize={true}
      >
        {({ errors, status, touched }) => (
          <Form>
            <div><h6 className="text-primary">Student Details</h6></div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Learner Name</label>
              <div className="col-lg-9">
                <input
                  name="name"
                  type="text"
                  value={`${initialValues?.firstName} ${initialValues?.lastName}`}
                  className="form-control col-lg-9"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">DOB</label>
              <div className="col-lg-9">
                <input
                  name="name"
                  type="text"
                  value={moment(parseInt(initialValues.dob)).format("DD-MM-YYYY")}
                  className="form-control col-lg-9"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Email</label>
              <div className="col-lg-9">
                <input
                  name="name"
                  type="text"
                  value={initialValues.email}
                  className="form-control col-lg-9"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Telephone no.</label>
              <div className="col-lg-9">
                <input
                  name="name"
                  type="text"
                  value={initialValues.telephone}
                  className="form-control col-lg-9"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Gender</label>
              <div className="col-lg-9">
                <input
                  name="name"
                  type="text"
                  value={initialValues.gender}
                  className="form-control col-lg-9"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Verified</label>
              <div className="col-lg-9">
                <input
                  name="name"
                  type="text"
                  value={initialValues.isVerified ? "Verified" : "Unverified"}
                  className="form-control col-lg-9"
                />
              </div>
            </div>
            <div className="row mb-20">
              <label className="form-label col-lg-3">Joined</label>
              <div className="col-lg-9">
                <input
                  name="name"
                  type="text"
                  value={moment(parseInt(initialValues.createdAt)).format("DD-MM-YYYY")}
                  className="form-control col-lg-9"
                />
              </div>
            </div>
            <hr className="my-20" />

            <div><h6 className="text-primary">Student Course Details</h6></div>
            <CoursesTable courseList={initialValues.courses}/>
          </Form>
        )}
      </Formik>
    </>
  );
}

const CoursesTable = ({
  courseList,
  loading,
  _handleActivateIssuer,
}) => {
  console.log("courseList: ", courseList);

  return (
    <>
      <Table responsive={true} bordered={false}>
        <thead>
          <tr>
            <th>#</th>
            <th>Course Registration No.</th>
            <th>Registration No.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courseList?.map((row, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{row.courseRegistrationNumber}</td>
              <td>{row.registrationNumber}</td>

              <td style={{ fontSize: "24px" }}>
                <select
                  name="type"
                  as="select"
                  type="string"
                  className="form-control"
                  value={row.status}
                >
                  <option value="" selected>Select credential type</option>
                  {
                    studentCourseStatusList.map((cred, index) => (
                      <option key={index} value={cred}>{cred}</option>
                    ))
                  }
                </select>
              </td>
            </tr>
          ))}
          <tr className="text-center">
            <td colspan="12">
              {courseList?.length == 0 && <EmptyData />}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default StudentDetail;
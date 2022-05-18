import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button } from "reactstrap";
import { Table } from "reactstrap";
import moment from "moment";
import { truncateString } from "../../shared/helper.js";
import { studentCourseStatusList } from "../../shared/constants.js";
import Link from "next/link";
import EmptyData from "../../components/general/EmptyData.js";

function StudentDetail({
  CourseFormSchema,
  initialValues,
  _handleCourseUpdate,
  context,
  courseList,
  _handleUpdateLearnerCourseStatus
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
            <div className="row">
              <div className="col-8">
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
              </div>
            </div>

            <div><h6 className="text-primary">Student Course Details</h6></div>
            <CoursesTable courseList={courseList} _handleUpdateLearnerCourseStatus={_handleUpdateLearnerCourseStatus} />
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
  _handleUpdateLearnerCourseStatus
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
            <th>Title</th>
            {/* <th>Description</th> */}
            <th>Study period</th>
            <th>Credit Hours</th>
            <th>Level</th>
            <th>College</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courseList?.map((row, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{row.courseRegistrationNumber}</td>
              <td>{row.registrationNumber}</td>
              <td>{row.courseTitle}</td>
              {/* <td>{truncateString(row.description, 50)}</td> */}
              <td>{row.duration}</td>
              <td>{row.creditHours}</td>
              <td>{row.level}</td>
              <td>{row.faculty}</td>
              <td style={{ fontSize: "24px" }}>
                <select
                  name="type"
                  as="select"
                  type="string"
                  className="form-control"
                  value={row.status}
                  onChange={e => _handleUpdateLearnerCourseStatus(e, row.courseId)}
                >
                  <option value="" disabled selected>Select credential type</option>
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
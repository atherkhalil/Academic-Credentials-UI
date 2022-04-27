import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import UploadCourse from "../../../components/form/UploadCourse";
import Layout from "../../../components/layout/Layout";
import { AddCourse } from "../../../graphql/mutations/issuer.mutation.js";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Yup from "yup";

const initialValues = {
  active: "",
  code: "",
  courseTitle: "",
  createdAt: "",
  creditHours: "",
  description: "",
  id: "",
  issuerId: "",
  session: "",
  updatedAt: "",
};

const CourseFormSchema = Yup.object().shape({
  courseTitle: Yup.string().required("Course Title is required"),
  session: Yup.string().required("Session is required"),
  creditHours: Yup.number().required("Credit Hours are required"),
  code: Yup.string().required("Course Code is required"),
  description: Yup.string().required("Course Description is required"),
});

const CourseDetail = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { query, push } = useRouter();
  const [initialState, setInitialState] = useState(initialValues)
  const courseList = useSelector((state) => state?.Course.courseList);
  const [addCourseMutation, { data, loading, error }] = useMutation(
    AddCourse
  );

  useEffect(() => {
    if (query.id) {
      let temp = courseList.find(course => course.id == query.id);
      console.log("temp: ", temp)
      setInitialState(temp);
    }
  }, []);

  const _handleCourseUpdate = (state) => {
    console.log("Submitting course: ", state)
    addCourseMutation({
      variables: {
        data: {
          courseTitle: state.courseTitle,
          session: state.session,
          creditHours: state.creditHours,
          code: state.code,
          description: state.description
        },
      },
      onCompleted: () => {
        enqueueSnackbar("Successfully submitted!", {
          variant: "success",
        });
        router.push(`/issuer/courses`);
      },
      onError: (errors) => {
        console.log("errors: ", errors.message);
        enqueueSnackbar(errors.message, {
          variant: "error",
        });
      },
    });
  }

  return (
    <Layout
      headTitle="Course Details"
      pageTitle="Course Details"
      pageTitleSub={"Welcome to Course Detail page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Course"}
    >
      <div className="text-end mb-4">
        <Link href={"/issuer/courses"}>
          <button className="btn btn-info mb-4">Back</button>
        </Link>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center align-items-center py-20">
                <div className="col-xl-8">
                  <UploadCourse 
                    CourseFormSchema={CourseFormSchema}
                    initialValues={initialState}
                    _handleCourseUpdate={_handleCourseUpdate}
                    context="edit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CourseDetail;

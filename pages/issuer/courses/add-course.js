import React from "react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import UploadCourse from "../../../components/form/UploadCourse";
import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import { AddCourse } from "../../../graphql/mutations/issuer.mutation.js";
import Link from "next/link";
import * as Yup from "yup";

const initialValues = {
  courseTitle: "",
  session: "",
  creditHours: "",
  code: "",
  description: "",
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
  const router = useRouter();
  const [addCourseMutation, { data, loading, error }] = useMutation(
    AddCourse
  );

  const _handleCourseUpdate = (state) => {
    console.log("Submitting course: ", state)
    addCourseMutation({
      variables: {
        data: {
          courseTitle: state.courseTitle,
          session: state.session,
          creditHours: state.creditHours.toString(),
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
      headTitle="Add Course"
      pageTitle="Add Course"
      pageTitleSub={"Welcome to Add Course page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Add Course"}
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
                    initialValues={initialValues}
                    _handleCourseUpdate={_handleCourseUpdate}
                    context="create"
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

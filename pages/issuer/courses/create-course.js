import React, { useState } from "react";
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
  duration: "",
  creditHours: "",
  code: "",
  description: "",
  faculty: "",
  level: ""
};

const CourseFormSchema = Yup.object().shape({
  courseTitle: Yup.string().required("Course Title is required"),
  duration: Yup.string().required("Duration is required"),
  creditHours: Yup.number().required("Credit Hours are required"),
  code: Yup.string().required("Course Code is required"),
  description: Yup.string().required("Course Description is required"),
  faculty: Yup.string().required("College Description is required"),
  level: Yup.string().required("Level Description is required")
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
          duration: state.duration,
          creditHours: state.creditHours.toString(),
          code: state.code,
          description: state.description,
          faculty: state.faculty,
          level: state.level
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

  const _handleCancel = () => {
    router.back();
  }

  return (
    <Layout
      headTitle="Create Course"
      pageTitle="Create Course"
      pageTitleSub={"Welcome to Create Course page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Create Course"}
    >
      <div className="mb-4">
        <Link href={"/issuer/courses"}>
          <button className="btn btn-info mb-4"><i class="ri-arrow-left-s-line"></i></button>
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
                    _handleCancel={_handleCancel}
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

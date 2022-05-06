import React from "react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import EnrollStudent from "../../../components/form/EnrollStudent";
import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import { AddCourse } from "../../../graphql/mutations/issuer.mutation.js";
import Link from "next/link";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  telephone: "",
  email: "",
  city: "",
  country: "",
};

const StudentFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("Date of birth is required"),
  telephone: Yup.string().required("Telephone no. is required"),
  email: Yup.string().required("Email is required"),
  city: Yup.string().required("City is required"),
  country: Yup.string().required("Country Title is required"),  
});

const StudentDetial = (props) => {
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
      headTitle="Enroll Student"
      pageTitle="Enroll Student"
      pageTitleSub={"Welcome to Enroll Student page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Enroll Student"}
    >
      <div className="mb-4">
        <Link href={"/issuer/students"}>
          <button className="btn btn-info mb-4"><i class="ri-arrow-left-s-line"></i></button>
        </Link>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center align-items-center py-20">
                <div className="col-xl-8">
                  <EnrollStudent 
                    StudentFormSchema={StudentFormSchema}
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
export default StudentDetial;
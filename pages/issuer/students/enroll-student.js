import React, { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { useQuery, useMutation } from "@apollo/client";
import "react-circular-progressbar/dist/styles.css";
import EnrollStudent from "../../../components/form/EnrollStudent";
import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import { LernerOnboarding } from "../../../graphql/mutations/issuer.mutation.js";
import { GetCoursesByIssuer } from "../../../graphql/queries/issuer.query.js";
import { SetCoursesList } from "../../../redux/actions/course.action.js";
import Link from "next/link";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  telephone: "",
  email: "",
  address: {
    city: "",
    country: "",
    street: ""
  },
  course: {
    courseRegistrationNumber: "",
    registrationNumber: "",
    courseId: "",
    status: "",
    issuerId: "",
    session: "",
  }
};

const StudentFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  gender: Yup.string().required("Gender is required"),
  dob: Yup.string().required("Date of birth is required"),
  telephone: Yup.string().required("Telephone no. is required"),
  email: Yup.string().required("Email is required"),
  address: Yup.object().shape({
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country Title is required"), 
    street: Yup.string().required("Street Title is required"),
  }),
  course: Yup.object().shape({
      courseRegistrationNumber: Yup.string().required("Course Registration No. ID is required"),
      registrationNumber: Yup.string().required("Student Registration ID is required"),
      session: Yup.string().required("Session is required"),
      status: Yup.string().required("Status is required")
  })
});

const StudentDetial = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const [coursesList, setCoursesList] = useState([]);
  const [courseSelected, setCourseSelected] = useState(null);
  const [courseSelectedError, setCourseSelectedError] = useState(null);
  const [lernerOnboardingMutation, { lernerOnboardingMutationData, lernerOnboardingMutationLoading, lernerOnboardingMutationError }] = useMutation(
    LernerOnboarding
  );
  const { loading, error, data } = useQuery(GetCoursesByIssuer);

  useEffect(() => {
    if (data?.GetCoursesByIssuer.length > 0) {
      setCoursesList(data?.GetCoursesByIssuer);
      dispatch(SetCoursesList(data?.GetCoursesByIssuer));
    }
  }, [data]);

  const _handleCourseUpdate = (state) => {
    if (!courseSelected) {
      setCourseSelectedError("Please select course")
      return;
    } else {
      setCourseSelectedError(null)
    }

    console.log("Course Selected: ", courseSelected)

    console.log("Submitting course: ", state)
    let payload = state;
    payload.course.courseId = courseSelected.value;
    payload.course.issuerId = courseSelected.issuerId;

    lernerOnboardingMutation({
      variables: {
        data: {
          firstName: state.firstName,
          lastName: state.lastName,
          gender: state.gender,
          dob: state.dob,
          telephone: state.telephone,
          email: state.email,
          address: {
            city: state.city,
            country: state.country,
            street: state.street,
          },
          course: {
            registrationNumber: state.course.registrationNumber,
            courseId: state.course.courseId,
            courseRegistrationNumber: state.course.courseRegistrationNumber,
            issuerId: state.course.issuerId,
            session: state.course.session,
            status: state.course.status
          }
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
                    coursesList={coursesList}
                    courseSelected={courseSelected}
                    setCourseSelected={setCourseSelected}
                    courseSelectedError={courseSelectedError}
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
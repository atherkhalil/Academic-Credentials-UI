import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import UploadCredential from "../../../components/form/UploadCredential";
import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import { AddCourse } from "../../../graphql/mutations/issuer.mutation.js";
import Link from "next/link";
import { ADD_CREDENTIAL } from "../../../redux/type.js";
import * as Yup from "yup";
import { AddCredential } from "../../../redux/actions/course.action.js";

const CredentialFormSchema = Yup.object().shape({
  type: Yup.string().required("Credential Type are required"),
  title: Yup.string().required("Credential Title are required"),
  description: Yup.string().required("Credential Description are required"),
  // proof: Yup.string().required("Proof is required"),
  Board: Yup.string().required("Board are required"),
  course: Yup.object().shape({
      registrationNumber: ""
  })
});

const CreateDetail = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [student, setStudent] = useState("");
  const [studentError, setStudentError] = useState(null);
  const [issuer, setIssuer] = useState("");
  const [issuerError, setIssuerError] = useState(null);
  const courseList = useSelector((state) => state.Course.courseList);
  const router = useRouter();
  const [initialValues, setInitialValues] = useState({
    type: "",
    title: "",
    description: "",
    issuer: "",
    issuance_date: "",
    student: "",
    proof: "",
    Board: "",
    course: {
      courseRegistrationNumber: "",
      registrationNumber: "",
      courseId: "",
      issuerId: ""
    }
  });
  const [addCourseMutation, { data, loading, error }] = useMutation(
    AddCourse
  );

  useEffect(() => {
    if (courseList && router?.query?.courseId) {
    _handleCurrentCourse(router.query.courseId)
    }
  }, [courseList]);

  const _handleCredentialUpdate = (state) => {
    if (student == "") {
      setStudentError("Please select student")
      return;
    } else {
      setStudentError(null)
    }

    console.log("Submitting course: ", JSON.stringify(state))
    dispatch(AddCredential({
      ...state,
      student: student,
      issuer: issuer
    }))
    enqueueSnackbar("Successfully submitted!", {
      variant: "success",
    });
    router.back();

    // addCourseMutation({
    //   variables: {
    //     data: {
    //       courseTitle: state.courseTitle,
    //       session: state.session,
    //       creditHours: state.creditHours.toString(),
    //       code: state.code,
    //       description: state.description
    //     },
    //   },
    //   onCompleted: () => {
    //     enqueueSnackbar("Successfully submitted!", {
    //       variant: "success",
    //     });
    //     router.push(`/issuer/courses`);
    //   },
    //   onError: (errors) => {
    //     console.log("errors: ", errors.message);
    //     enqueueSnackbar(errors.message, {
    //       variant: "error",
    //     });
    //   },
    // });
  }

  const _handleCurrentCourse = (courseId) => {
    let course = courseList.find(obj => obj.id === courseId);
    setInitialValues({
      ...initialValues,
      title: course.courseTitle,
      description: course.description
    })
  }

  return (
    <Layout
      headTitle="Create Credential"
      pageTitle="Create Credential"
      pageTitleSub={"Welcome to Create Credential page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Create Credential"}
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
                  <UploadCredential
                    CredentialFormSchema={CredentialFormSchema}
                    initialValues={initialValues}
                    _handleCredentialUpdate={_handleCredentialUpdate}
                    context="create"
                    student={student}
                    setStudent={setStudent}
                    studentError={studentError}
                    issuer={issuer}
                    setIssuer={setIssuer}
                    issuerError={issuerError}
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
export default CreateDetail;

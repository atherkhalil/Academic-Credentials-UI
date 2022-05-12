import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Yup from "yup";
import "react-circular-progressbar/dist/styles.css";
import Layout from "../../../../../components/layout/Layout";
import CredentialDetail from "../../../../../components/form/CredentialDetail";
import SignWithKeyModal from "../../../../../components/modal/SignWithKeyModal/SignWithKeyModal.js";
import { AddCredential } from "../../../../../redux/actions/course.action.js";
import { CreateCredentials } from "../../../../../graphql/mutations/issuer.mutation.js";
import { GetLearnersByIssuer, GetCredentialBYId } from "../../../../../graphql/queries/issuer.query.js";
import moment from 'moment';

const CredentialFormSchema = Yup.object().shape({
  type: Yup.string().required("Credential Type is required"),
  title: Yup.string().required("Credential Title is required"),
  description: Yup.string().required("Credential Description is required"),
  session: Yup.string().required("Session is required"),
  Board: Yup.string().required("Board is required"),

  level: Yup.string().required("Level is required"),
  creditHours: Yup.string().required("Credit Hours is required"),
  cgpa: Yup.string().required("CGPA is required"),
  expiryDate: Yup.string().required("Expiry Date is required"),
  faculty: Yup.string().required("Faculty is required"),
});

const CreateDetail = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [student, setStudent] = useState("");
  const [studentsList, setStudentsList] = useState([]);
  const [studentError, setStudentError] = useState(null);
  const [issuer, setIssuer] = useState("");
  const [issuerError, setIssuerError] = useState(null);
  const courseList = useSelector((state) => state.Course.courseList);
  const currentUser = useSelector((state) => state.User.currentuser);
  const router = useRouter();
  const { loading, error, data  } = useQuery(GetLearnersByIssuer);
  const [showSignWithKeyModal, setShowSignWithKeyModal] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const { loadIng: GetCourseByIDDataLoading, error: GetCourseByIDDataError, data: GetCourseByIDDataData } = useQuery(GetCredentialBYId, {
    variables: { credentialId: router?.query?.credentialId },
  });
  const [initialValues, setInitialValues] = useState({
    type: "",
    title: "",
    description: "",
    issuer: "",
    issuanceDate: "",
    student: "",
    learnerId: "",
    session: "",
    Board: "",
    level: "",
    creditHours: "",
    cgpa: "",
    expiryDate: "",
    faculty: "",
    name: ""
  });
  const [createCredentialsMutation, { createCredentialsMutationData, createCredentialsMutationLoading, createCredentialsMutationError }] = useMutation(
    CreateCredentials
  );

  useEffect(() => {
    if (GetCourseByIDDataData?.GetCredentialBYId) {
      let temp = GetCourseByIDDataData?.GetCredentialBYId;
      console.log("GetCourseByIDDataData: ", temp)
      console.log("issuanceDate ", moment(parseInt(temp.issuanceDate)).format("DD-MM-YYYY"))

      setInitialValues({
        ...temp,
        learnerName: `${temp.learner.registrationNumber} - ${temp.learner.firstName} ${temp.learner.lastName}`,
        issuanceDate: moment(parseInt(temp.issuanceDate)).format("DD-MM-YYYY"),
        expiryDate: moment(parseInt(temp.expiryDate)).format("DD-MM-YYYY"),
      })
    }
  }, [GetCourseByIDDataData]);

  const _handleCredentialUpdate = (state) => {
    if (student == "") {
      setStudentError("Please select student")
      return;
    } else {
      setStudentError(null)
    }

    createCredentialsMutation({
      variables: {
        data: {
          type: state.type,
          courseId: router?.query?.courseId,
          title: state.title,
          description: state.description,
          learnerId: student.value,
          issuanceDate: new Date(),
          session: state.session,          
          level: state.level,
          creditHours: state.creditHours,
          cgpa: state.cgpa,
          expiryDate: state.expiryDate,
          faculty: state.faculty
        },
      },
      onCompleted: () => {
        enqueueSnackbar("Successfully submitted!", {
          variant: "success",
        });
        
        // Now after credential is submitted, Issuer need to sign it with his digital signature
        setShowSignWithKeyModal(!showSignWithKeyModal)

        // router.push(`/issuer/courses`);
      },
      onError: (errors) => {
        console.log("errors: ", errors.message);
        enqueueSnackbar(errors.message, {
          variant: "error",
        });
      },
    });
  }

  const _handleSignCredential = (state) => { 
    console.log("Submitting state: ", state)
    enqueueSnackbar("Credential signed successfully!", {
      variant: "success",
    });
    setTimeout(() => {
      router.back();
    }, 500);
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
        <button onClick={() => router.back()} className="btn btn-info mb-4"><i class="ri-arrow-left-s-line"></i></button>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center align-items-center py-20">
                <div className="col-xl-8">
                  <CredentialDetail
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
                    studentsList={studentsList}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SignWithKeyModal
        toggle={showSignWithKeyModal}
        setToggle={setShowSignWithKeyModal}
        _handleSignCredential={_handleSignCredential}
        loading={false}
      />
    </Layout>
  );
};
export default CreateDetail;

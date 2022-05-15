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
    name: "",
    credentialTrackingStatus: null,
    issuerECDSA: 
    {
        k: "559013b2dc2196e112b142be2adb426a25f003a9ae504fbee4d0b58f18547564",
        r: "888e0051ede98729682408349a2bf37657a515474838e4a5121dc7351b1dd327",
        s: "79a7c464c1e6a912eb36a4804ef6699a273e9f8c8c4378040ea28f2740aab554",
        signingDate: "Tue, 10 May 2022 12:38:45 GMT"
    },
    learnerECDSA: {
        k: "0d07ba56a96e09c468578bb67b208bd00077ae79bdf7b28ad9feb55888155dd8",
        r: "7890dc448f2c1ee1e5a428b28bfa6267798782d2ea2f2f7ec251ec7909772b31",
        s: "2221ef87015f8d561b331b3d9244ca5321a7cff0a4aa5edd462bb5d9cc0fbb76",
        signingDate: "Tue, 10 May 2022 12:38:51 GMT"
    },
    moeECDSA: {
        k: "75e6a9fd2f9f9ac07dc048427006414db7d984be523d955a70384f0aeda7511a",
        r: "0a768b73bcb6fc2be07f933b6fd2148d824b8ddd923b961f3334e7d082d7e162",
        s: "76d1e2d2b9a1a160305b5f1a07d670220755651797f864348c24831d2f7eabd6",
        signingDate: "Tue, 10 May 2022 12:38:54 GMT"
    }
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
      headTitle="Credential Detail"
      pageTitle="Credential Detail"
      pageTitleSub={"Welcome to Credential Detail page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Credential Detail"}
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

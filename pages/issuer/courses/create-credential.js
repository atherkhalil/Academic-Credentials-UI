import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Yup from "yup";
import "react-circular-progressbar/dist/styles.css";
import Layout from "../../../components/layout/Layout";
import UploadCredential from "../../../components/form/UploadCredential";
import SignWithKeyModal from "../../../components/modal/SignWithKeyModal/SignWithKeyModal.js";
import { AddCredential } from "../../../redux/actions/course.action.js";
import { CreateCredentials } from "../../../graphql/mutations/issuer.mutation.js";
import { SignCredentials } from "../../../graphql/mutations/general.mutation.js";
import { GetLearnersByIssuer, GetCourseByID, GetAllIssuerDetail } from "../../../graphql/queries/issuer.query.js";

const CredentialFormSchema = Yup.object().shape({
  type: Yup.string().required("Credential Type is required"),
  title: Yup.string().required("Credential Title is required"),
  description: Yup.string().required("Credential Description is required"),
  session: Yup.string().required("Session is required"),
  level: Yup.string().required("Level is required"),
  creditHours: Yup.string().required("Credit Hours is required"),
  cgpa: Yup.string().required("CGPA is required"),
  expiryDate: Yup.string().required("Expiry Date is required"),
  faculty: Yup.string().required("College is required"),
  moeId: Yup.string().required("Ministry of Education Id is required"),
  moeName: Yup.string().required("Ministry of Education Name is required"),
  moePublicKey: Yup.string().required("Ministry of Education Public key is required")
});

const CreateDetail = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [student, setStudent] = useState("");
  const [studentsList, setStudentsList] = useState([]);
  const [studentError, setStudentError] = useState(null);
  const [issuer, setIssuer] = useState("");
  const [issuerPrivateKey, setIssuerPrivateKey] = useState("");
  const [issuerError, setIssuerError] = useState(null);
  const courseList = useSelector((state) => state.Course.courseList);
  const currentUser = useSelector((state) => state.User.currentuser);
  const { loading: GetAllIssuerDetailLoading, error: GetAllIssuerDetailError, data: GetAllIssuerDetailData } = useQuery(GetAllIssuerDetail, {
    variables: { issuerId: currentUser?.user?._id },
  });
  const router = useRouter();
  const { loading, error, data } = useQuery(GetLearnersByIssuer);
  const [showSignWithKeyModal, setShowSignWithKeyModal] = useState(false);

  const [currentCourse, setCurrentCourse] = useState(null);
  const { loadIng: GetCourseByIDLoading, error: GetCourseByIDError, data: GetCourseByIDData } = useQuery(GetCourseByID, {
    variables: { courseId: router?.query?.courseId },
  });
  const [initialValues, setInitialValues] = useState({
    type: "",
    title: "",
    description: "",
    issuer: "",
    issuance_date: "",
    student: "",
    learnerId: "",
    session: "",
    level: "",
    creditHours: "",
    cgpa: "",
    expiryDate: "",
    faculty: "",
    moeId: "",
    moeName: "",
    moePublicKey: ""
  });
  const [createCredentialsMutation, { createCredentialsMutationData, createCredentialsMutationLoading, createCredentialsMutationError }] = useMutation(
    CreateCredentials
  );
  const [
    signCredentialsMutation,
    { signCredentialsMutationData, signCredentialsMutationLoading, signCredentialsMutationError }
  ] = useMutation(SignCredentials);
  const [createdCredentialId, setCreatedCredentialId] = useState(null);

  useEffect(() => {
    if (GetCourseByIDData?.GetCourseByID) {
      setInitialValues({
        ...initialValues,
        title: GetCourseByIDData.GetCourseByID?.courseTitle,
        description: GetCourseByIDData.GetCourseByID?.description
      })
      setCurrentCourse(GetCourseByIDData.GetCourseByID);
    }
  }, [GetCourseByIDData]);

  useEffect(() => {
    if (GetAllIssuerDetailData?.GetIssuerDetail) {
      let temp = GetAllIssuerDetailData?.GetIssuerDetail;
      setInitialValues({
        ...initialValues,
        moeId: temp.moeId,
        moeName: temp.moeName,
        moePublicKey: temp.moePublicKey,
      })
      setIssuerPrivateKey(GetAllIssuerDetailData?.GetIssuerDetail.privateKey)
    }
  }, [GetAllIssuerDetailData]);

  useEffect(() => {
    if (data?.GetLearnersByIssuer.length > 0) {
      setStudentsList(data?.GetLearnersByIssuer);
    }
  }, [data]);

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
          faculty: state.faculty,
          moeId: state.moeId,
          moeName: state.moeName,
          moePublicKey: state.moePublicKey
        },
      },
      onCompleted: (data) => {
        console.log("data: ", data)
        enqueueSnackbar("Successfully submitted!", {
          variant: "success",
        });        

        // Now after credential is submitted, Issuer need to sign it with his digital signature
        setShowSignWithKeyModal(!showSignWithKeyModal)
        setCreatedCredentialId(data.createCredentials.id)
      },
      onError: (errors) => {
        console.log("errors: ", errors.message);
        enqueueSnackbar(errors.message, {
          variant: "error",
        });
      },
    });
  }

  const _handleSignCredential = () => {
    signCredentialsMutation({
      variables: {
        credentialId: createdCredentialId
      },
      onCompleted: () => {
        enqueueSnackbar("Credential signed successfully!", {
          variant: "success",
        });
        setTimeout(() => {
          router.back();
        }, 500);
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
        privateKey={issuerPrivateKey}
        setToggle={setShowSignWithKeyModal}
        _handleSignCredential={_handleSignCredential}
        loading={false}
      />
    </Layout>
  );
};
export default CreateDetail;

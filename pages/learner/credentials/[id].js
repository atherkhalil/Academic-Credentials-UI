import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import LearnerCredentialDetail from "../../../components/form/LearnerCredentialDetail";
import Layout from "../../../components/layout/Layout";
import { AddCourse } from "../../../graphql/mutations/issuer.mutation.js";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Yup from "yup";
import { UpdateCredential } from "../../../redux/actions/learner.action.js";
import SignWithKeyModal from "../../../components/modal/SignWithKeyModal/SignWithKeyModal.js";
import { GetCredentialBYId } from "../../../graphql/queries/learner.query.js";
import { SignCredentials } from "../../../graphql/mutations/general.mutation.js";
import { GetAllLearnerDetail } from "../../../graphql/queries/learner.query.js";
import { downloadCredentialPdf } from "../../../services/files.service.js";
import moment from "moment";

const initialValues = {
  id: "627a32e7bdd7fef935ce3175",
  type: "ACADEMIC",
  title: "Bachelors of Computer Engineering",
  description: "Bachelors of Computer Engineering is related to Computer Engineering",
  issuanceDate: new Date(),
  Board: "Board",
  courseId: "627a32e7bdd7fef935ce31f7",
  session: "2022-2026",
  issuer: {
    id: "627a32e7bdd7fef935ce31f3",
    type: "ACCREDITED",
    name: "Mr. Bob",
    url: "",
    publicKey: "vRFy4g2/bRvIHpt3fbr4LA==",
  },
  learner: {
    id: "627a32e7bdd7fef935ce31f5",
    registrationNumber: "0001",
    courseRegistrationNumber: "2235",
    firstName: "Mrs.",
    lastName: "Alis",
    courseSession: "4 Years",
    publicKey: "vRFy4g2/bRvIHpt3fbr4LA=="
  },
};

const CourseFormSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});

const CourseDetail = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { query, push, back } = useRouter();
  const currentUser = useSelector((state) => state.User.currentuser);
  const dispatch = useDispatch();
  const [issuerPrivateKey, setIssuerPrivateKey] = useState("");
  const [initialState, setInitialState] = useState(null);
  const [addCourseMutation, { data, loading, error }] = useMutation(AddCourse);
  const [showSignWithKeyModal, setShowSignWithKeyModal] = useState(false);
  const { loading: GetCredentialBYIdLoading, error: GetCredentialBYIdError, data: GetCredentialBYIdData } = 
  useQuery(GetCredentialBYId, {
    variables: {
      credentialId: query?.id
    }
  });
  const [
    signCredentialsMutation,
    { signCredentialsMutationData, signCredentialsMutationLoading, signCredentialsMutationError }
  ] = useMutation(SignCredentials);
  const { loading: GetAllLearnerDetailLoading, error: GetAllLearnerDetailError, data: GetAllLearnerDetailData } = useQuery(GetAllLearnerDetail, {
    variables: { learnerId: currentUser?.user?._id },
  });

  useEffect(() => {
    if (GetCredentialBYIdData?.GetCredentialBYId) {
      let temp = {...GetCredentialBYIdData?.GetCredentialBYId};
      temp.issuanceDate = moment(parseInt(temp.issuanceDate)).format("DD:MM:YYYY");
      setInitialState(temp)
    }
  }, [GetCredentialBYIdData]);

  useEffect(() => {
    if (GetAllLearnerDetailData?.GetLearnerDetail.privateKey) {
      setIssuerPrivateKey(GetAllLearnerDetailData?.GetLearnerDetail.privateKey)
    }
  }, [GetAllLearnerDetailData]);

  const _handleVerify = () => {
    setShowSignWithKeyModal(!showSignWithKeyModal)
  }

  const _handleSignCredential = () => {
    signCredentialsMutation({
      variables: {
        credentialId: query?.id
      },
      onCompleted: () => {
        enqueueSnackbar("Credential signed successfully!", {
          variant: "success",
        });
        setTimeout(() => {
          back();
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
      headTitle="Credential Details"
      pageTitle="Credential Details"
      pageTitleSub={"Welcome to Credential Detail page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Credential"}
    >
      <div className="mb-4">
        <Link href={"/learner/credentials"}>
          <button className="btn btn-info mb-4">
            <i class="ri-arrow-left-s-line"></i>
          </button>
        </Link>

        <div style={{ textAlign: "right" }}>
          <button color="primary" onClick={_handleVerify} className="btn btn-primary me-10">
            Verify
          </button>
          <button onClick={() => downloadCredentialPdf(initialState.credentialUrl)} className="btn btn-success mb-4 "><i class="ri-file-download-fill cursor-pointer ri-xl align-middle"></i>Download</button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center align-items-center py-20">
                <div className="col-xl-8">
                  <LearnerCredentialDetail
                    CourseFormSchema={CourseFormSchema}
                    initialValues={initialState}
                    context="edit"
                    _handleVerify={_handleVerify}
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
export default CourseDetail;

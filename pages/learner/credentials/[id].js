import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import LearnerCredentialDetail from "../../../components/form/LearnerCredentialDetail";
import Layout from "../../../components/layout/Layout";
import { AddCourse } from "../../../graphql/mutations/issuer.mutation.js";
import { SendAttestationRequest } from "../../../graphql/mutations/learner.mutation.js";
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

const CourseFormSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});

const CourseDetail = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { query, push, back, reload } = useRouter();
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
  const [
    sendAttestationRequestMutation,
    { sendAttestationRequestMutationData, sendAttestationRequestMutationLoading, sendAttestationRequestMutationError }
  ] = useMutation(SendAttestationRequest);
  const { loading: GetAllLearnerDetailLoading, error: GetAllLearnerDetailError, data: GetAllLearnerDetailData } = useQuery(GetAllLearnerDetail, {
    variables: { learnerId: currentUser?.user?._id },
  });

  useEffect(() => {
    if (GetCredentialBYIdData?.GetCredentialBYId) {
      let temp = { ...GetCredentialBYIdData?.GetCredentialBYId };
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
          reload();
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

  const _handleSendAttestationRequestToMoe = () => {
    sendAttestationRequestMutation({
      variables: {
        credentialId: query?.id,
        moeId: initialState?.moe?.moeId
      },
      onCompleted: () => {
        enqueueSnackbar("Attestation request sent successfully!", {
          variant: "success",
        });
        setTimeout(() => {
          reload();
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

  const _handleShowVerifyButton = (state) => {
    if (
      state?.credentialTrackingStatus?.learnerSign?.status == "SIGNED"
    ) {
      return true;
    } else {
      return false;
    }
  }

  const _handleShowAttestButton = (state) => {
    if (
      state?.credentialTrackingStatus?.learnerSign?.status == "SIGNED"
    ) {
      if (
        state?.credentialTrackingStatus?.moeSign?.status == "SIGNED"
      ) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
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
          {
            !_handleShowVerifyButton(initialState) && (
              <button color="primary" onClick={_handleVerify} className="btn btn-primary me-10">
                Verify
              </button>
            )
          }
          {
            _handleShowAttestButton(initialState) && (
              <button color="primary" onClick={_handleSendAttestationRequestToMoe} className="btn btn-info me-10">
                Attest
              </button>
            )
          }
          <button onClick={() => downloadCredentialPdf(process.env.NEXT_PUBLIC_CREDENTIAL_URL + initialState.credentialUrl)} className="btn btn-success mb-4 "><i class="ri-file-download-fill cursor-pointer ri-xl align-middle"></i>Download</button>
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

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Layout from "../../../components/layout/Layout";
import SettingsMenu from "../../../components/layout/SettingsMenu";
import { Step1, Step2, Step3 } from "../../../components/MoeProfileWizard";
import { profileNavigation } from "../../../shared/constants.js";
import { GetAllMOEDetailsQuery } from "../../../graphql/queries/authentication.query.js";
import { UpdateMoeDetails } from "../../../graphql/mutations/moe.mutation.js";
import { SignatureUpload } from "../../../graphql/mutations/general.mutation.js";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const initialValues = {
  adminEmail: "",
  contactEmail: "",
  createdAt: "",
  id: "",
  isVerified: "",
  logoUrl: "",
  name: "",
  publicKey: "",
  secret: "",
  signature: "",
  siteUrl: "",
  telephone: "",
  updatedAt: "",
};

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  telephone: Yup.string().required("Telephone is required"),
  contactEmail: Yup.string().required("Email is required"),
  siteUrl: Yup.string().required("Url is required"),
});

function SettingsProfile() {
  const router = useRouter();
  const [currentViewStep, setCurrentViewStep] = useState(0);
  const currentuser = useSelector((state) => state.User.currentuser);
  const [currentUserData, setCurrentUserData] = useState(initialValues);
  const [signatureFile, setSignatureFile] = useState(null);
  const { loading, error, data } = useQuery(GetAllMOEDetailsQuery, {
    variables: { moeId: currentuser?.user?._id },
  });
  const [updateMoeDetailsMutation, { updateMoeDetailsMutationData, updateMoeDetailsMutationLoading, updateMoeDetailsMutationError }] = useMutation(
    UpdateMoeDetails
  );
  const [signatureUploadMutation, { signatureUploadMutationData, signatureUploadMutationLoading, signatureUploadMutationError }] = useMutation(
    SignatureUpload
  );
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (data) {
      setCurrentUserData(data.GetMOEDetails);
    }
  }, [data]);

  const _handleProfileSubmit = (state) => {
    console.log("Submitting Profile.... : ", state)
    updateMoeDetailsMutation({
      variables: {
        name: state.name,
        telephone: state.telephone,
        contactEmail: state.contactEmail,
        siteUrl: state.siteUrl,
        course: []
      },
      onCompleted: () => {
        enqueueSnackbar("Successfully submitted!", {
          variant: "success",
        });
        router.reload();
      },
      onError: (errors) => {
        console.log("errors: ", errors.message);
        enqueueSnackbar(errors.message, {
          variant: "error",
        });
      },
    });
  }

  const _handleSignatureUpload = () => {
    console.log("signatureFile: ", signatureFile)
    signatureUploadMutation({
      variables: {
        file: signatureFile
      },
      onCompleted: () => {
        enqueueSnackbar("Successfully submitted!", {
          variant: "success",
        });
        router.reload();
      },
      onError: (errors) => {
        console.log("errors: ", errors.message);
        enqueueSnackbar(errors.message, {
          variant: "error",
        });
      },
    });
  }
  
  const _handleSignatureFileChange = (e) => {
    let file = e.target.files[0];
    setSignatureFile(file);
  }

  const _getCurrentStep = () => {
    switch (currentViewStep) {
      case 0:
        return (
          <Step1
            currentUserData={currentUserData}
            ProfileSchema={ProfileSchema}
            _handleSubmit={_handleProfileSubmit}
          />
        );
      case 1:
        return <Step2
          currentUserData={currentUserData} 
          _handleSubmit={_handleSignatureUpload}
          _handleSignatureFileChange={_handleSignatureFileChange}
        />;
      case 2:
        return <Step3 />;

      default:
        return <Step1 />;
    }
  };

  const _handleStepChange = (index) => {
    setCurrentViewStep(index);
  };

  return (
    <>
      <Layout
        headTitle="Profile"
        pageTitle="Profile"
        pageTitleSub={"Welcome to Profile page"}
        pageClass={"dashboard"}
        parent={"Settings"}
        child={"Profile"}
      >
        <div className="row">
          <div className="col-md-3">
            <SettingsMenu
              profileNavigation={profileNavigation["MOE"]}
              currentViewStep={currentViewStep}
              _handleStepChange={_handleStepChange}
            />
          </div>
          <div className="col-md-9">{_getCurrentStep()}</div>
        </div>
      </Layout>
    </>
  );
}
export default SettingsProfile;

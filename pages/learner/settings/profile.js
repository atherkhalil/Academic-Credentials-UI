import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Layout from "../../../components/layout/Layout";
import SettingsMenu from "../../../components/layout/SettingsMenu";
import { Step1, Step2, Step3 } from "../../../components/IssuerProfileWizard";
import { profileNavigation } from "../../../shared/constants.js";
import { GetAllIssuerDetail } from "../../../graphql/queries/issuer.query.js";
import { UpdateIssuerDetails } from "../../../graphql/mutations/learner.mutation.js";
import { SignatureUpload } from "../../../graphql/mutations/general.mutation.js";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const initialValues = {
  adminEmail: "",
  approvalDate: "",
  approved: "",
  contactEmail: "",
  createdAt: "",
  description: "",
  id: "",
  isVerified: "",
  logoUrl: "",
  moeId: "",
  name: "",
  publicKey: "",
  revocationList: "",
  siteUrl: "",
  telephone: "",
  type: "",
  updatedAt: "",
  address: {
    country: "",
    city: "",
    street: "",
  }
};

const ProfileSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
  name: Yup.string().required("Name is required"),
  // contactEmail: Yup.string().required("Email is required"),
  // address: Yup.string().required("Address is required"),
  telephone: Yup.string().required("Telephone is required"),
  siteUrl: Yup.string().required("Url is required")
});

function SettingsProfile() {
  const router = useRouter();
  const [currentViewStep, setCurrentViewStep] = useState(0);
  const currentuser = useSelector((state) => state.User.currentuser);
  const [currentUserData, setCurrentUserData] = useState(initialValues);
  const [signatureFile, setSignatureFile] = useState(null);
  const { loading, error, data } = useQuery(GetAllIssuerDetail, {
    variables: { issuerId: currentuser?.user?._id },
  });
  const [updateIssuerDetailsMutation, { updateIssuerDetailsMutationData, updateIssuerDetailsMutationLoading, updateIssuerDetailsMutationError }] = useMutation(
    UpdateIssuerDetails
  );
  const [signatureUploadMutation, { signatureUploadMutationData, signatureUploadMutationLoading, signatureUploadMutationError }] = useMutation(
    SignatureUpload
  );
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (data) {
      console.log("GetIssuerDetail: ", data.GetIssuerDetail)
      setCurrentUserData(data.GetIssuerDetail);
    }
  }, [data]);

  const _handleSubmit = (state) => {
    console.log("Submitting Profile.... : ", state)
    let address = {};
    address.city = state.address.city;
    address.country = state.address.country;
    address.street = state.address.street;

    updateIssuerDetailsMutation({
      variables: {
        type: state.type,
        name: state.name,
        contactEmail: state.adminEmail,
        address: address,
        telephone: state.telephone,
        siteUrl: state.siteUrl,
        description: state.description,
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
            _handleSubmit={_handleSubmit}
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
              profileNavigation={profileNavigation["LEARNER"]}
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

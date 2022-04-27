import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Layout from "../../../components/layout/Layout";
import SettingsMenu from "../../../components/layout/SettingsMenu";
import { Step1, Step2, Step3 } from "../../../components/IssuerProfileWizard";
import { profileNavigation } from "../../../shared/constants.js";
import { GetAllIssuerDetail } from "../../../graphql/queries/issuer.query.js";
import { useQuery } from "@apollo/client";
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
};

const ProfileSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
  name: Yup.string().required("Name is required"),
  contactEmail: Yup.string().required("Email is required"),
  address: Yup.string().required("Address is required"),
  telephone: Yup.string().required("Telephone is required"),
  siteUrl: Yup.string().required("Url is required")
});

function SettingsProfile() {
  const [currentViewStep, setCurrentViewStep] = useState(0);
  const currentuser = useSelector((state) => state.User.currentuser);
  const [currentUserData, setCurrentUserData] = useState(initialValues);
  const { loading, error, data } = useQuery(GetAllIssuerDetail, {
    variables: { issuerId: currentuser.user._id },
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (data) {
      setCurrentUserData(data.GetIssuerDetail);
    }
  }, [data]);

  const _handleSubmit = (state) => {
    enqueueSnackbar("Successfully updated!", {
      variant: "success",
    });
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
        return <Step2 />;
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
              profileNavigation={profileNavigation["ISSUER"]}
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

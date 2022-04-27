import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import Layout from "../../../components/layout/Layout";
import SettingsMenu from "../../../components/layout/SettingsMenu";
import { Step1, Step2, Step3 } from "../../../components/MoeProfileWizard";
import { profileNavigation } from "../../../shared/constants.js";
import { GetAllMOEDetailsQuery } from "../../../graphql/queries/authentication.query.js";
import { useQuery } from "@apollo/client";
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
  name: Yup.string().required("Full is required"),
  telephone: Yup.string().required("Full is required"),
  contactEmail: Yup.string().required("Full is required"),
  siteUrl: Yup.string().required("Full is required"),
});

function SettingsProfile() {
  const [currentViewStep, setCurrentViewStep] = useState(0);
  const currentuser = useSelector((state) => state.User.currentuser);
  const [currentUserData, setCurrentUserData] = useState(initialValues);
  const { loading, error, data } = useQuery(GetAllMOEDetailsQuery, {
    variables: { moeId: currentuser.user._id },
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (data) {
      setCurrentUserData(data.GetMOEDetails);
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
        pageTitleSub={"Welcome to Edunet Settings Profile page"}
        pageClass={"dashboard"}
        parent={"Settings"}
        child={"Profile"}
      >
        <div className="row">
          <div className="col-md-3">
            <SettingsMenu
              profileNavigation={profileNavigation["moe"]}
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

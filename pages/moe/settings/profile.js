import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../../components/layout/Layout";
import SettingsMenu from "../../../components/layout/SettingsMenu";
import { Step1, Step2, Step3 } from "../../../components/MoeProfileWizard";
import { profileNavigation } from "../../../shared/constants.js";
import { GetMOEDetailsQuery } from "../../../graphql/queries/authentication.query.js";
import { useQuery } from "@apollo/client";

function SettingsProfile() {
  const [currentViewStep, setCurrentViewStep] = useState(0);
  const currentuser = useSelector((state) => state.User.currentuser);
//   const { loading, error, data } = useQuery(GetMOEDetailsQuery, {
//     variables: { moeId: currentuser.currentuser.User._id },
//   });

  useEffect(() => {
    console.log("currentuser: ", currentuser)
  }, []);

//   useEffect(() => {
//       if (data) {
//           console.log("data: ", data)
//       }
//   }, [data]);

  const _getCurrentStep = () => {
    switch (currentViewStep) {
      case 0:
        return <Step1 />;
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

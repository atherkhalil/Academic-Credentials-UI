import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Layout from "../../components/layout/Layout";
import LearnerCredentialGrid from "../../components/elements/LearnerCredentialGrid";
import { GetCoursesByIssuer } from "../../graphql/queries/issuer.query.js";
import { UpdateCourseStatus } from "../../graphql/mutations/issuer.mutation.js";
import { GetAllCredentials } from "../../graphql/queries/learner.query.js";
import Link from "next/link";
import { SetCoursesList } from "../../redux/actions/course.action.js";

function MyCourses() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  // const credentialList = useSelector((state) => state?.Learner.credentialList);
  const [credentialList, setCredentialList] = useState([]);
  const { loading, error, data } = useQuery(GetCoursesByIssuer);
  const [
    updateCourseStatusMutation,
    { updateCourseData, updateCourseLoading, updateCourseError },
  ] = useMutation(UpdateCourseStatus);
  const { loading: GetAllCredentialsLoading, error: GetAllCredentialsError, data: GetAllCredentialsData } = 
    useQuery(GetAllCredentials);

  useEffect(() => {
    if (GetAllCredentialsData?.GetCredentials.length > 0) {
      setCredentialList(GetAllCredentialsData?.GetCredentials);
    }
  }, [GetAllCredentialsData]);

  const _handleCourseStatusUpdate = (id, active, index) => {
    let temp = [];
    for (let index = 0; index < credentialList.length; index++) {
      let issuer = Object.assign({}, credentialList[index]);
      if (issuer.id == id) {
        issuer.active = !active;
      }
      temp.push(issuer);
    }

    setCoursesList(temp);

    updateCourseStatusMutation({
      variables: {
        courseId: id,
        active: !active,
      },
      onCompleted: () => {
        enqueueSnackbar("Successfully submitted!", {
          variant: "success",
        });
        window.location.reload();
      },
      onError: (errors) => {
        console.log("errors: ", errors.message);
        enqueueSnackbar(errors.message, {
          variant: "error",
        });
      },
    });
  };

  return (
    <Layout
      headTitle="Credentials"
      pageTitle="Credentials"
      pageTitleSub={"Welcome to Credentials page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Credentials"}
    >
      <div className="row">
        <div className="col-12">
          <div className="row">
            <LearnerCredentialGrid
              credentialList={credentialList}
              loading={loading}
              _handleCourseStatusUpdate={_handleCourseStatusUpdate}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default MyCourses;

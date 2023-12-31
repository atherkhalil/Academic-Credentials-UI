import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../../../components/layout/Layout";
import CoursesTable from "../../../../components/CoursesTable/CoursesTable.js";
import { ApprovedIssuer } from "../../../../graphql/mutations/authentication.mutation.js";
import { GetPendingIssuerRequests, GetCredentialsBYCourseId } from "../../../../graphql/queries/issuer.query.js";
import Link from "next/link";

function Credentials() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const [issuerList, setIssuerList] = useState([]);
  const [credentialList, setCredentialList] = useState([]);
  const { loading, error, data } = useQuery(GetPendingIssuerRequests);
  const { loading: GetCredentialsBYCourseIdLoading, error: GetCredentialsBYCourseIdError, data: GetCredentialsBYCourseIdData } = 
  useQuery(GetCredentialsBYCourseId, {
    variables: {
      courseId: router?.query?.courseId
    }
  });
  // const credentialList = useSelector((state) => state.Course.credentialList);
  const [
    approvedIssuerMutation,
    {
      approvedIssuerMutationData,
      approvedIssuerMutationLoading,
      approvedIssuerMutationError,
    },
  ] = useMutation(ApprovedIssuer);

  useEffect(() => {
    if (data?.GetPendingIssuerRequests.length > 0) {
      setIssuerList(data?.GetPendingIssuerRequests);
    }
  }, [data]);

  useEffect(() => {
    if (GetCredentialsBYCourseIdData?.GetCredentialsBYCourseId.length > 0) {
      setCredentialList(GetCredentialsBYCourseIdData?.GetCredentialsBYCourseId);
    }
  }, [GetCredentialsBYCourseIdData]);

  const _handleActivateIssuer = (issuerId, approved, index) => {
    let temp = [];
    for (let index = 0; index < issuerList.length; index++) {
      let issuer = Object.assign({}, issuerList[index]);
      if (issuer.id == issuerId) {
        issuer.approved = true;
      }
      temp.push(issuer);
    }

    setIssuerList(temp);

    approvedIssuerMutation({
      variables: {
        issuerId: issuerId,
        approved: !approved,
      },
      onCompleted: (res) => {
        enqueueSnackbar(!approved ? "Issuer Activated" : "Issuer Deactivated", {
          variant: "success",
        });
        setTimeout(() => window.location.reload(), 500);
      },
    });
  };

  return (
    <>
      <Layout
        headTitle="Credentials"
        pageTitle="Credentials"
        pageTitleSub={"Welcome to Credentials page"}
        pageClass={"dashboard"}
        parent={"Home"}
        child={"Credentials"}
      >
          <div className="d-flex flex-row justify-content-between">
            <div className="mb-4">
            <Link href={"/issuer/courses"}>
                <button className="btn btn-info mb-4">
                <i class="ri-arrow-left-s-line"></i>
                </button>
            </Link>
            </div>
            <div className="text-end mb-4">
            <Link href={"/issuer/courses/create-credential?courseId=" + router.query.courseId}>
                <button className="btn btn-primary mb-4">Create Credential</button>
            </Link>
            </div>
          </div>

        <CoursesTable
          issuerList={credentialList}
          loading={loading}
          _handleActivateIssuer={_handleActivateIssuer}
        />
      </Layout>
    </>
  );
}
export default Credentials;

import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import StudentsTable from "../../components/StudentsTable/StudentsTable";
import { ApprovedIssuer } from "../../graphql/mutations/authentication.mutation.js";
import { GetPendingIssuerRequests, GetLearnersByIssuer } from "../../graphql/queries/issuer.query.js";

function Students() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const [issuerList, setIssuerList] = useState([]);
  const { loading, error, data } = useQuery(GetPendingIssuerRequests);
  const { loading: GetCoursesByIssuerLoading, error: GetCoursesByIssuerError, data: GetCoursesByIssuerData } = useQuery(GetLearnersByIssuer);
  const [
    approvedIssuerMutation,
    {
      approvedIssuerMutationData,
      approvedIssuerMutationLoading,
      approvedIssuerMutationError,
    },
  ] = useMutation(ApprovedIssuer);

  useEffect(() => {
    console.log("GetCoursesByIssuerData: ", GetCoursesByIssuerData)
    if (GetCoursesByIssuerData?.GetLearnersByIssuer?.length > 0) {
      setIssuerList(GetCoursesByIssuerData?.GetLearnersByIssuer);
    }
  }, [GetCoursesByIssuerData]);

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
        setTimeout(() => window.location.reload(), 500)
      },
    });
  };

  return (
    <>
      <Layout
        headTitle="Students"
        pageTitle="Students"
        pageTitleSub={"Welcome to Students"}
        pageClass={"dashboard"}
        parent={"Home"}
        child={"Students"}
      >
        <div className="text-end mb-4">
          <Link href={"/issuer/students/enroll-student"}>
            <button className="btn btn-primary mb-4">Enroll Student</button>
          </Link>
        </div>

        <StudentsTable
          issuerList={issuerList}
          loading={loading}
          _handleActivateIssuer={_handleActivateIssuer}
        />
      </Layout>
    </>
  );
}
export default Students;

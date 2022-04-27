import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import Layout from "../../../../components/layout/Layout";
import AccreditedInstitutesTable from "../../../../components/AccreditedInstitutesTable/AccreditedInstitutesTable";
import { ApprovedIssuer } from "../../../../graphql/mutations/authentication.mutation.js";
import { GetPendingIssuerRequests } from "../../../../graphql/queries/issuer.query.js";
import Link from "next/link";

function Credentials() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const [issuerList, setIssuerList] = useState([]);
  const { loading, error, data } = useQuery(GetPendingIssuerRequests);
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
            <Link href={"/issuer/courses/add-course"}>
                <button className="btn btn-info mb-4">
                <i class="ri-arrow-left-s-line"></i>
                </button>
            </Link>
            </div>
            <div className="text-end mb-4">
            <Link href={"/issuer/courses/add-course"}>
                <button className="btn btn-primary mb-4">Create Credential</button>
            </Link>
            </div>
          </div>

        <AccreditedInstitutesTable
          issuerList={issuerList}
          loading={loading}
          _handleActivateIssuer={_handleActivateIssuer}
        />
      </Layout>
    </>
  );
}
export default Credentials;

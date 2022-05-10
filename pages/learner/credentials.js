import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Layout from "../../components/layout/Layout";
import LearnerCredentialGrid from "../../components/elements/LearnerCredentialGrid";
import { GetCoursesByIssuer } from "../../graphql/queries/issuer.query.js";
import { UpdateCourseStatus } from "../../graphql/mutations/issuer.mutation.js";
import Link from "next/link";
import { SetCoursesList } from "../../redux/actions/course.action.js";

const tempCredentialList = [
  {
    id: "627a32e7bdd7fef935ce3175",
    type: "ACADEMIC",
    title: "Bachelors of Computer Engineering",
    description: "Bachelors of Computer Engineering is related to Computer Engineering",
    issuanceDate: new Date(),
    Board: "Board",
    courseId: "627a32e7bdd7fef935ce31f7",
    session: "2022-2026",
    issuer: {
      id: "627a32e7bdd7fef935ce31f3",
      type: "ACCREDITED",
      name: "Mr. Bob",
      url: "",
      publicKey: "vRFy4g2/bRvIHpt3fbr4LA==",
    },
    learner: {
      id: "627a32e7bdd7fef935ce31f5",
      registrationNumber: "0001",
      courseRegistrationNumber: "2235",
      firstName: "Mrs.",
      lastName: "Alis",
      courseSession: "4 Years",
      publicKey: "vRFy4g2/bRvIHpt3fbr4LA=="
    },
  }
];

function MyCourses() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const credentialList = useSelector((state) => state?.Learner.credentialList);
  const [coursesList, setCoursesList] = useState(credentialList || []);
  const { loading, error, data } = useQuery(GetCoursesByIssuer);
  const [
    updateCourseStatusMutation,
    { updateCourseData, updateCourseLoading, updateCourseError },
  ] = useMutation(UpdateCourseStatus);

  // useEffect(() => {
  //   if (data?.GetCoursesByIssuer.length > 0) {
  //     setCoursesList(data?.GetCoursesByIssuer);
  //     dispatch(SetCoursesList(data?.GetCoursesByIssuer));
  //   }
  // }, [data]);

  const _handleCourseStatusUpdate = (id, active, index) => {
    let temp = [];
    for (let index = 0; index < coursesList.length; index++) {
      let issuer = Object.assign({}, coursesList[index]);
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
              coursesList={coursesList}
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

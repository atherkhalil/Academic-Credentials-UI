import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import LearnerCredentialDetail from "../../../components/form/LearnerCredentialDetail";
import Layout from "../../../components/layout/Layout";
import { AddCourse } from "../../../graphql/mutations/issuer.mutation.js";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Yup from "yup";
import { UpdateCredential } from "../../../redux/actions/learner.action.js";

const initialValues = {
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
};

const CourseFormSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});

const CourseDetail = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { query, push } = useRouter();
  const credentialList = useSelector((state) => state?.Learner.credentialList);
  const dispatch = useDispatch();
  const [initialState, setInitialState] = useState(credentialList[0]);
  const [addCourseMutation, { data, loading, error }] = useMutation(AddCourse);

  const _handleVerify = () => {
    enqueueSnackbar("Successfully verified!", {
      variant: "success",
    });
    let temp = credentialList;
    temp[0].status = true;
    dispatch(UpdateCredential(temp));
    push(`/learner/credentials`);
  }

  return (
    <Layout
      headTitle="Credential Details"
      pageTitle="Credential Details"
      pageTitleSub={"Welcome to Credential Detail page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Credential"}
    >
      <div className="mb-4">
        <Link href={"/learner/credentials"}>
          <button className="btn btn-info mb-4">
            <i class="ri-arrow-left-s-line"></i>
          </button>
        </Link>

        <div style={{ textAlign: "right" }}>
          <button color="primary" onClick={_handleVerify} className="btn btn-primary me-10">
            Verify
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center align-items-center py-20">
                <div className="col-xl-8">
                  <LearnerCredentialDetail
                    CourseFormSchema={CourseFormSchema}
                    initialValues={initialState}
                    context="edit"
                    _handleVerify={_handleVerify}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CourseDetail;

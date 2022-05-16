import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import StudentDetail from "../../../components/form/StudentDetail";
import Layout from "../../../components/layout/Layout";
import { GetAllLearnerDetail } from "../../../graphql/queries/issuer.query.js";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Yup from "yup";

const initialValues =  {
  __typename:"Course",
  id:"627a32e7bdd7fef935ce31f7",
  issuerId:"627a27ce136fe6549adfb686",
  courseTitle:"Bachelors of Computer Engineering",
  duration:"4 Years",
  description:"Bachelors of Computer Engineering is related to Computer Engineering",
  creditHours:"140",
  code:"BSEE",
  active:true,
  createdAt:"1652175591693",
  updatedAt:"1652175591693"
};

const CourseFormSchema = Yup.object().shape({
  courseTitle: Yup.string().required("Course Title is required"),
  duration: Yup.string().required("Duration is required"),
  creditHours: Yup.number().required("Credit Hours are required"),
  code: Yup.string().required("Course Code is required"),
  description: Yup.string().required("Course Description is required"),
});

const StudentDetailPage = (props) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { query, push } = useRouter();
  const [initialState, setInitialState] = useState(initialValues);
  const courseList = useSelector((state) => state?.Course.courseList);
  const { loading: GetAllLearnerDetailLoading, error: GetAllLearnerDetailError, data: GetAllLearnerDetailData } = 
  useQuery(GetAllLearnerDetail, {
    variables: {
        learnerId: query?.id
    }
  });

  useEffect(() => {
    if (GetAllLearnerDetailData?.GetLearnerDetail) {
        setInitialState(GetAllLearnerDetailData?.GetLearnerDetail);
    }
  }, [GetAllLearnerDetailData]);

  return (
    <Layout
      headTitle="Student Details"
      pageTitle="Student Details"
      pageTitleSub={"Welcome to Student Detail page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Student"}
    >
      <div className="mb-4">
        <Link href={"/issuer/students"}>
          <button className="btn btn-info mb-4">
            <i class="ri-arrow-left-s-line"></i>
          </button>
        </Link>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row d-flex justify-content-center align-items-center py-20">
                <div className="col-xl-8">
                  <StudentDetail
                    CourseFormSchema={CourseFormSchema}
                    initialValues={initialState}
                    context="edit"
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

export default StudentDetailPage;
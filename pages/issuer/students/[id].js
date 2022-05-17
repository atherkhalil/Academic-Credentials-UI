import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import StudentDetail from "../../../components/form/StudentDetail";
import Layout from "../../../components/layout/Layout";
import { GetAllLearnerDetail } from "../../../graphql/queries/issuer.query.js";
import { CourseByID } from "../../../graphql/mutations/issuer.mutation.js";
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
  const [courseListState, setCourseListState] = useState([]);
  const { loading: GetAllLearnerDetailLoading, error: GetAllLearnerDetailError, data: GetAllLearnerDetailData } = 
  useQuery(GetAllLearnerDetail, {
    variables: {
        learnerId: query?.id
    }
  });
  const [courseByIDMutation, { courseByIDMutationData, courseByIDMutationLoading, courseByIDMutationError }] = useMutation(
    CourseByID
  );

  useEffect(() => {
    if (GetAllLearnerDetailData?.GetLearnerDetail) {
        setInitialState(GetAllLearnerDetailData?.GetLearnerDetail);
        let courseList = GetAllLearnerDetailData?.GetLearnerDetail.courses;
        console.log("GetAllLearnerDetailData?.GetLearnerDetail: ", )

        let tempCourseList = [];
        for (let index = 0; index < courseList.length; index++) {
          const course = courseList[index];

          courseByIDMutation({
            variables: {
              courseId: course.courseId
            },
            onCompleted: (data) => {
              let newCourseObj = {
                ...course,
                active: data.CourseByID.active,
                code: data.CourseByID.code,
                courseTitle: data.CourseByID.courseTitle,
                createdAt: data.CourseByID.createdAt,
                creditHours: data.CourseByID.creditHours,
                description: data.CourseByID.description,
                duration: data.CourseByID.duration,
                faculty: data.CourseByID.faculty,
                id: data.CourseByID.id,
                issuerId: data.CourseByID.issuerId,
                level: data.CourseByID.level,
                updatedAt: data.CourseByID.updatedAt,
              };
              setCourseListState([...courseListState, newCourseObj]);
            },
            onError: (errors) => {
              enqueueSnackbar(errors.message, {
                variant: "error",
              });
            },
          }) 
        }
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
                <div className="col-12">
                  <StudentDetail
                    CourseFormSchema={CourseFormSchema}
                    initialValues={initialState}
                    courseList={courseListState}
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
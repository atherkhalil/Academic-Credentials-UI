import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Layout from "../../components/layout/Layout";
import LearnerCoursesGrid from "../../components/elements/LearnerCoursesGrid";
import { GetCoursesByIssuer } from "../../graphql/queries/issuer.query.js";
import { UpdateCourseStatus } from "../../graphql/mutations/issuer.mutation.js";
import Link from "next/link";
import { SetCoursesList } from "../../redux/actions/course.action.js";

const tempCourseList = [
  {
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
  }
];

function MyCourses() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const [coursesList, setCoursesList] = useState(tempCourseList);
  const { loading, error, data } = useQuery(GetCoursesByIssuer);
  const [
    updateCourseStatusMutation,
    { updateCourseData, updateCourseLoading, updateCourseError },
  ] = useMutation(UpdateCourseStatus);

  useEffect(() => {
    if (data?.GetCoursesByIssuer.length > 0) {
      setCoursesList(data?.GetCoursesByIssuer);
      dispatch(SetCoursesList(data?.GetCoursesByIssuer));
    }
  }, [data]);

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
      headTitle="Courses"
      pageTitle="Courses"
      pageTitleSub={"Welcome to Courses page"}
      pageClass={"dashboard"}
      parent={"Home"}
      child={"Courses"}
    >
      <div className="row">
        <div className="col-12">
          <div className="row">
            <LearnerCoursesGrid
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

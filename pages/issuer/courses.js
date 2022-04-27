import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import Layout from "../../components/layout/Layout";
import CoursesGrid from "../../components/elements/CoursesGrid";
import { GetCoursesByIssuer } from "../../graphql/queries/issuer.query.js";
import { UpdateCourseStatus } from "../../graphql/mutations/issuer.mutation.js";
import Link from "next/link";
import { SetCoursesList } from '../../redux/actions/course.action.js';
 
function MyCourses() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const [coursesList, setCoursesList] = useState([]);
  const { loading, error, data } = useQuery(GetCoursesByIssuer);
  const [updateCourseStatusMutation, { updateCourseData, updateCourseLoading, updateCourseError }] = useMutation(
    UpdateCourseStatus
  );

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
        active: !active
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
      <div className="text-end mb-4">
        <Link href={"/issuer/courses/add-course"}>
            <button className="btn btn-primary mb-4">Add Course</button>
        </Link>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <CoursesGrid coursesList={coursesList} loading={loading} _handleCourseStatusUpdate={_handleCourseStatusUpdate} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default MyCourses;

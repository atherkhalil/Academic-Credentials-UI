import Link from "next/link";
import React from "react";
import Layout from "../../components/layout/Layout";
import CoursesGrid from "../../components/elements/CoursesGrid";
import GroupDiscussWidget from "../../components/elements/GroupDiscussWidget";
import TopPerformingWidget from "../../components/elements/TopPerformingWidget";

function MyCourses() {
    return (
        <Layout
            headTitle="My Courses"
            pageTitle="My Courses"
            pageTitleSub={"Welcome to Edunet My Courses page"}
            pageClass={"dashboard"}
            parent={"Home"}
            child={"My Courses"}
        >
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <CoursesGrid />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
export default MyCourses;

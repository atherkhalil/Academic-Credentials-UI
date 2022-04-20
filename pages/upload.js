import React from "react";
import "react-circular-progressbar/dist/styles.css";
import UploadCourse from "../components/form/UploadCourse";
import Layout from "../components/layout/Layout";
const percentage = 66;
const MyStats = (props) => {
    return (
        <Layout
            headTitle="Upload Details"
            pageTitle="Upload"
            pageTitleSub={"Welcome to Edunet Upload page"}
            pageClass={"dashboard"}
            parent={"Home"}
            child={"upload"}
        >
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        {/* <div className="card-header">
                        <h4 className="card-title">Upload Details</h4>
                    </div> */}
                        <div className="card-body">
                            <div className="row d-flex justify-content-center align-items-center py-20">
                                <div className="col-xl-8">
                            <UploadCourse />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default MyStats;

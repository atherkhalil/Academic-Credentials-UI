import React from "react";
import Layout from "../components/layout/Layout";
import LeaderBoardList from "./../components/elements/LeaderBoardList";

const LeaderBoard = (props) => {
    return (
        <Layout
            headTitle="Leader Board"
            pageTitle="Leader Board"
            pageTitleSub={"Welcome to Edunet Leader Board page"}
            pageClass={"dashboard"}
            parent={"Home"}
            child={"Leader Board"}
        >
            <div className="row">
                <div className="col-12">
                    <div className="card transparent">
                        <div className="card-body">
                            <div className="rtable rtable--5cols rtable--collapse">
                                <div className="rtable-row rtable-row--head bg-transparent">
                                    <div className="rtable-cell topic-cell column-heading text-dark">
                                        <strong> Course Name</strong>
                                    </div>
                                    <div className="rtable-cell category-cell column-heading text-dark">
                                        <strong> Category</strong>
                                    </div>
                                    <div className="rtable-cell ranking-cell column-heading text-dark">
                                        <strong> Ranking</strong>
                                    </div>
                                    <div className="rtable-cell impression-cell column-heading text-dark">
                                        <strong> Impression</strong>
                                    </div>
                                    <div className="rtable-cell sales-cell column-heading text-dark">
                                        <strong> Sales</strong>
                                    </div>
                                    <div className="rtable-cell earning-cell column-heading text-dark">
                                        <strong> Earning</strong>
                                    </div>
                                </div>
                                <LeaderBoardList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
export default LeaderBoard;

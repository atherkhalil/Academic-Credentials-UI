import dynamic from "next/dynamic";
import { connect } from "react-redux";
import BarChart from "../components/chart/EarningHistory";
import TotalSales from "../components/chart/TotalSales";
import StudentQueries from "../components/elements/StudentQueries";
import TrafficAnalytics from "../components/elements/TrafficAnalytics";
import Layout from "../components/layout/Layout";
import BalanceState from "../components/widget/BalanceState";
import RecentNotification from "./../components/elements/RecentNotification";
import StatsWidget from "./../components/widget/StatsWidget";
const DataMap = dynamic(() => import("../components/elements/DataMap"), {
    ssr: false,
});

function Home({ earningHistory, totalSales }) {
    return (
        <>
            <Layout
                headTitle="Dashboard"
                pageTitle="Dashboard"
                pageTitleSub={"Welcome to Edunet Dashboard"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Dashboard"}
            >
                <div className="row">
                    <StatsWidget />

                    <div className="col-lg-6 col-xxl-7">
                        <div
                            id="user-activity"
                            className="card"
                            data-aos="fade-up"
                        >
                            <div className="card-header">
                                <h4 className="card-title">
                                    {earningHistory.name}
                                </h4>
                            </div>

                            <div className="card-body">
                                <BarChart earningHistory={earningHistory} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xxl-5">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">
                                    Recent Notification{" "}
                                </h4>
                                <a href="#" className="btn btn-primary">
                                    View All
                                </a>
                            </div>
                            <div className="card-body">
                                <div className="recent-notification">
                                    <div
                                        className="notification-list"
                                        style={{ height: "275px" }}
                                    >
                                        <RecentNotification />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-xl-4 ">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Total Sales</h4>
                            </div>
                            <div className="card-body">
                                <TotalSales totalSales={totalSales} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-8 ">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Student Queries</h5>
                            </div>
                            <div className="card-body">
                                <StudentQueries />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Balance</h4>
                            </div>
                            <div className="card-body">
                                <div className="total-balance">
                                    <p>Available Balance</p>
                                    <h2>$221,478</h2>
                                </div>
                                <BalanceState />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-9">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Student Location</h4>
                            </div>
                            <div className="card-body text-center">
                                <DataMap />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card transparent">
                            <div className="card-header">
                                <h4 className="card-title">Trafic Analytics</h4>
                            </div>
                            <div className="card-body">
                                <div className="rtable rtable--5cols rtable--collapse">
                                    <div className="rtable-row rtable-row--head bg-transparent">
                                        <div className="rtable-cell topic-cell column-heading text-dark">
                                            <strong>Name</strong>
                                        </div>
                                        <div className="rtable-cell traffic-cell column-heading text-dark">
                                            <strong>Traffic</strong>
                                        </div>
                                        <div className="rtable-cell source-cell column-heading text-dark">
                                            <strong>Source</strong>
                                        </div>
                                        <div className="rtable-cell referrals-cell column-heading text-dark">
                                            <strong>Referrals</strong>
                                        </div>
                                        <div className="rtable-cell trend-cell column-heading text-dark">
                                            <strong>Trend</strong>
                                        </div>
                                    </div>
                                    <TrafficAnalytics />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

const mapStateToProps = (state) => ({
    earningHistory: state.EarningHistory.expenses,
    totalSales: state.TotalSales.statistics,
});
export default connect(mapStateToProps, {})(Home);

import dynamic from "next/dynamic";
import { connect } from "react-redux";
import BarChart from "../components/chart/EarningHistory";
import TotalSales from "../components/chart/TotalSales";
import StudentQueries from "../components/elements/StudentQueries";
import TrafficAnalytics from "../components/elements/TrafficAnalytics";
import Layout from "../components/layout/Layout";
import BalanceState from "../components/widget/BalanceState";
import RecentNotification from "../components/elements/RecentNotification";
import StatsWidget from "../components/widget/StatsWidget";
const DataMap = dynamic(() => import("../components/elements/DataMap"), {
    ssr: false,
});

function Home({ earningHistory, totalSales }) {
    return (
        <>
            <Layout
                headTitle="Dashboard"
                pageTitle="Dashboard"
                pageTitleSub={"Ministry of Education Dashboard"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Dashboard"}
            >
                <div className="row">
                    <StatsWidget />
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

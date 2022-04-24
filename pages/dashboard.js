import dynamic from "next/dynamic";
import { connect } from "react-redux";
import Layout from "../components/layout/Layout";
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

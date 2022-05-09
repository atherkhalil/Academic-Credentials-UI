import dynamic from "next/dynamic";
import Layout from "../../components/layout/Layout";
import StatsWidget from "../../components/widget/StatsWidget";
import { useDispatch } from "react-redux";

const DataMap = dynamic(() => import("../../components/elements/DataMap"), {
    ssr: false,
});

function Home() {
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

export default Home;

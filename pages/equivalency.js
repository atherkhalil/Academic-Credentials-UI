import Link from "next/link";
import Layout from "../components/layout/Layout";
import ProfileWidget from './../components/elements/ProfileWidget';
import TopPerfomingWidget from "./../components/elements/TopPerformingWidget";

function Equivalency() {
    return (
        <>
            <Layout
                headTitle="Equivalency"
                pageTitle="Equivalency"
                pageTitleSub={"Welcome to Equivalency"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Equivalency"}
            >
            </Layout>
        </>
    );
}
export default Equivalency;

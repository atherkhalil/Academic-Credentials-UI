import Link from "next/link";
import Layout from "../components/layout/Layout";
import ProfileWidget from './../components/elements/ProfileWidget';
import TopPerfomingWidget from "./../components/elements/TopPerformingWidget";

function AccreditedInstitutes() {
    return (
        <>
            <Layout
                headTitle="Accredited Institutes"
                pageTitle="Accredited Institutes"
                pageTitleSub={"Welcome to Accredited Institutes"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Accredited Institutes"}
            >
            </Layout>
        </>
    );
}
export default AccreditedInstitutes;

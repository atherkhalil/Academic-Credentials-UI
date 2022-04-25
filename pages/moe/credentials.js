import Link from "next/link";
import Layout from "../../components/layout/Layout";
import ProfileWidget from '../../components/elements/ProfileWidget';
import TopPerfomingWidget from "../../components/elements/TopPerformingWidget";

function Credentials() {
    return (
        <>
            <Layout
                headTitle="Credentials"
                pageTitle="Credentials"
                pageTitleSub={"Welcome to Credentials"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Credentials"}
            >
            </Layout>
        </>
    );
}
export default Credentials;

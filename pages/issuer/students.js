import Link from "next/link";
import Layout from "../../components/layout/Layout";
import ProfileWidget from '../../components/elements/ProfileWidget';
import TopPerfomingWidget from "../../components/elements/TopPerformingWidget";

function Student() {
    return (
        <>
            <Layout
                headTitle="Students"
                pageTitle="Students"
                pageTitleSub={"Welcome to Students"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Students"}
            >
            </Layout>
        </>
    );
}
export default Student;

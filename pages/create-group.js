import Link from "next/link";
import GroupCreate from "../components/form/GroupCreate";
import Layout from "../components/layout/Layout";

function CreateGroup() {

    return (
        <>
            <Layout
                headTitle="Create Group"
                pageTitle="Create Group"
                pageTitleSub={"Welcome to Edunet Create Group page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Create Group"}
            >
                <div className="row">
                    <div className="col-12">
                        <div className="cc-card">
                            <div className="cc-card-title d-flex justify-content-between align-items-center">
                                <h5>Create Group</h5>
                                <Link href="javascript:history.back()">
                                <a>Go Back</a>
                                </Link>
                            </div>
                                <hr />
                            <div className="cc-card-body">
                                <GroupCreate/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default CreateGroup;

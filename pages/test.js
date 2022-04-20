import Layout from "../components/layout/Layout";
function BlankPage() {
    return (
        <>
            <Layout
                headTitle="Profile"
                pageTitle="Profile"
                pageTitleSub={"Welcome to Edunet Settings Profile page"}
                pageClass={"dashboard"}
                parent={"Settings"}
                child={"Profile"}
            >
                <div className="row">
                    <div className="col-xl-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Card Title</h4>
                            </div>
                            <div className="card-body">This is Card Body</div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default BlankPage;

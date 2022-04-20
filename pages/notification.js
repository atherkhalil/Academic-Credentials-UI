import Layout from "../components/layout/Layout";
import DropdownNotification from "./../components/elements/DropdownNotification";

function Notification() {
    return (
        <>
            <Layout
                headTitle="Notification"
                pageTitle="Notification"
                pageTitleSub={"Welcome to Edunet Notification page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Notification"}
            >
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">
                                    All Notification{" "}
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="recent-notification">
                                    <div className="lists">
                                        <DropdownNotification />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Notification;

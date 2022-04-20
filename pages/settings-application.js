import Preferences from "../components/form/Preferences";
import Layout from "../components/layout/Layout";
import SettingsMenu from "./../components/layout/SettingsMenu";
function SettingsPreferences() {
    return (
        <>
            <Layout
                 headTitle="Application"
                 pageTitle="Application"
                 pageTitleSub={"Welcome to Edunet Settings Application page"}
                 pageClass={"dashboard"}
                 parent={"Settings"}
                 child={"Application"}
            >

                <div className="row">
                    <div className="col-md-3">
                        <SettingsMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Preperences</h4>
                            </div>
                            <div className="card-body">
                                <Preferences/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default SettingsPreferences;

import React from "react";
import { connect } from "react-redux";
import ProfileVisit from "../components/chart/ProfileVisit";
import MyBalance from '../components/elements/MyBalanceWidget';
import PayoutWidthdraw from '../components/elements/PayoutWidthdrawal';
import TopSaleWidget from "../components/elements/TopSaleWidget";
import Layout from "../components/layout/Layout";

function Wallet({ profileVisit }) {
    return (
        <Layout
            headTitle="Wallet"
            pageTitle="Wallet"
            pageTitleSub={"Welcome to Edunet Wallet page"}
            pageClass={"dashboard"}
            parent={"Home"}
            child={"Wallet"}
        >
            <div className="row">
                <div className="col-xl-8 col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Profile Visitor</h4>
                        </div>
                        <div className="card-body">
                            <ProfileVisit profileVisit={profileVisit} />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className="card transparent">
                        <div className="card-header">
                            <h4 className="card-title">Top Sales</h4>
                        </div>
                        <div className="card-body">
                            <TopSaleWidget />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">My Balance</h4>
                        </div>
                        <div className="card-body">
                            <MyBalance/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                    <div className="card transparent">
                        <div className="card-header">
                            <h4 className="card-title">Payout Withdrawal</h4>
                            <a href="#">Withdrawal Method</a>
                        </div>
                        <div className="card-body">
                            <PayoutWidthdraw/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

const mapStateToProps = (state) => ({
    profileVisit: state.EarningHistory.expenses,
});
export default connect(mapStateToProps, {})(Wallet);

import { connect } from "react-redux";
import WithdrawTransaction from "../components/elements/WithdrawTransaction";
import Layout from "../components/layout/Layout";
import MyBalance from "./../components/chart/MyBalance";
import PaymentCard from "./../components/elements/PaymentCard";
import PaymentSelect from "./../components/elements/PaymentSelect";

function Balance({ myBalance }) {
    return (
        <>
            <Layout
                headTitle="My Card"
                pageTitle="My Card"
                pageTitleSub={"Welcome to Edunet My Card page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"My Card"}
            >
                <div className="row">
                    <PaymentCard />

                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Money Withdraw</h4>
                            </div>
                            <div className="card-body">
                                <form action="">
                                    <div className="row">
                                        <div className="col-8">
                                            <label
                                                for="inputState"
                                                className="form-label"
                                            >
                                                Amount
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="330.00"
                                            />
                                        </div>
                                        <div className="col-4 mb-16">
                                            <label
                                                for="inputState"
                                                className="form-label"
                                            >
                                                Currency
                                            </label>
                                            <select
                                                id="inputState"
                                                className="form-select"
                                            >
                                                <option selected>USD</option>
                                                <option>GBP</option>
                                                <option>EUR</option>
                                                <option>BDT</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mb-16">
                                            <PaymentSelect />
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                Make Withdraw
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">My Balance</h4>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-24">
                                    <div>
                                        <p className="mb-0">Available</p>
                                        <h3>8365.00</h3>
                                    </div>
                                    <div>
                                        <p className="mb-0">Pending</p>
                                        <h3>8365.00</h3>
                                    </div>
                                </div>
                                <div className="my-chart">
                                    <MyBalance myBalance={myBalance} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card transparent">
                            <div className="card-header">
                                <h4 className="card-title">Transactions</h4>
                            </div>
                            <div className="card-body">
                                <div className="rtable rtable--5cols rtable--collapse">
                                    <div className="rtable-row rtable-row--head bg-transparent">
                                        <div className="rtable-cell topic-cell column-heading text-dark">
                                            <strong> Description</strong>
                                        </div>
                                        <div className="rtable-cell id-cell column-heading text-dark">
                                            <strong> TR ID</strong>
                                        </div>
                                        <div className="rtable-cell date-cell column-heading text-dark">
                                            <strong> Date</strong>
                                        </div>
                                        <div className="rtable-cell amount-cell column-heading text-dark">
                                            <strong> Amount</strong>
                                        </div>
                                        <div className="rtable-cell card-cell column-heading text-dark">
                                            <strong> Card</strong>
                                        </div>
                                        <div className="rtable-cell status-cell column-heading text-dark">
                                            <strong> Status</strong>
                                        </div>
                                        <div className="rtable-cell receipt-cell column-heading text-dark">
                                            <strong> Receipt</strong>
                                        </div>
                                    </div>
                                    <WithdrawTransaction />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
const mapStateToProps = (state) => ({
    myBalance: state.MyBalance.expenses,
});
export default connect(mapStateToProps, {})(Balance);

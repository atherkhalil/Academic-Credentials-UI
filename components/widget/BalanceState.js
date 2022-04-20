import { useState } from 'react'
function balanceState() {
    const [open, setOpen] = useState("a1");
    // const balanceStateItem = [
    //     {
    //         icon: "ri-team-line",
    //         title: "Total Students",
    //         amount: 5220,
    //         color: "text-primary bg-primary-lighten",
    //     },
    //     {
    //         icon: "ri-add-circle-line",
    //         title: "New Students",
    //         amount: 2345,
    //         color: "text-warning bg-warning-lighten",
    //     },
    //     {
    //         icon: "ri-stack-line",
    //         title: "Total Courses",
    //         amount: 874,
    //         color: "text-danger bg-danger-lighten",
    //     },
    //     {
    //         icon: "ri-coins-line",
    //         title: "Total Earnings",
    //         amount: 236,
    //         color: "text-info bg-info-lighten",
    //     },
    // ];

    return (
        <>
            {/* {balanceStateItem.map((item, id) => ( */}

            <div className="row">
                <div className="col-lg-6 col-xl-12">
                    <div
                        className={`${open === "a1"
                            ? "balance-stats d-flex justify-content-between align-items-center active"
                            : "balance-stats d-flex justify-content-between align-items-center bg-primary-lighten "
                            }`}
                        onMouseOver={() => setOpen("a1")}
                    >
                        <div>
                            <p>Today's Earn</p>
                            <h3>$42,678</h3>
                        </div>
                        <span><i className="ri-arrow-right-line"></i></span>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-12">
                    <div
                        className={`${open === "a2"
                            ? "balance-stats d-flex justify-content-between align-items-center active"
                            : "balance-stats d-flex justify-content-between align-items-center "
                            }`}
                        onMouseOver={() => setOpen("a2")}
                    >
                        <div>
                            <p>Under Review</p>
                            <h3>$1,798</h3>
                        </div>
                        <span><i className="ri-arrow-right-line"></i></span>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-12">
                    <div
                        className={`${open === "a3"
                            ? "balance-stats d-flex justify-content-between align-items-center active"
                            : "balance-stats d-flex justify-content-between align-items-center "
                            }`}
                        onMouseOver={() => setOpen("a3")}
                    >
                        <div>
                            <p>Pending</p>
                            <h3>$255.25</h3>
                        </div>
                        <span><i className="ri-arrow-right-line"></i></span>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-12">
                    <div
                        className={`${open === "a4"
                            ? "balance-stats d-flex justify-content-between align-items-center active"
                            : "balance-stats d-flex justify-content-between align-items-center "
                            }`}
                        onMouseOver={() => setOpen("a4")}
                    >
                        <div>
                            <p>Withdraw</p>
                            <h3>$365,478</h3>
                        </div>
                        <span><i className="ri-arrow-right-line"></i></span>
                    </div>
                </div>
            </div>


            {/* <div className="col-xl-3 col-sm-6">
                        <div className="stat-widget bg-white p-3 mb-160 mb-30">
                            <p className="mb-0 fs-16">{item.title}</p>
                            <div className="d-flex align-items-center justify-content-between">
                                <h2 className="mb-0">{item.amount}</h2>
                                <span className="icon">
                                    <i className={`${item.icon} ${item.color} fs-50 py-8 px-8 rounded`}></i>
                                </span>
                            </div>
                        </div>
                    </div> */}


        </>
    );
}
export default balanceState;

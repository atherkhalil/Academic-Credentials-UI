import { CircularProgressbar } from "react-circular-progressbar";
function MyBalance() {
    const myBalanceList = [
        {
            available: 1257,
            income: 3650,
            pending: 235,
            withdraw: 2300,
            percentIncome: 66,
            percentWithdraw: 33,
        },
    ]

    return (
        <>
            {myBalanceList.map((item, id) => (
                <>
                        <div className="my-balance-inner d-flex justify-content-between align-items-center mb-25" key={id}>
                            <div className="my-balance-items">
                                <p className="mb-0">Available</p>
                                <h4 className="mb-0 fs-28">${item.available}</h4>
                            </div>
                            <div className="my-balance-items">
                                <p className="mb-0">Income</p>
                                <h4 className="d-flex mb-0 fs-28">
                                    <span> {item.income}</span>
                                    <i className="ri-arrow-up-line text-success ms-10"></i>
                                </h4>
                            </div>
                            <div className="balance-progress">
                                <CircularProgressbar
                                    strokeWidth={10}
                                    value={item.percentIncome}
                                    text={`${item.percentIncome}%`}
                                />
                            </div>
                        </div>
                        <div className="my-balance-inner d-flex justify-content-between align-items-center">
                            <div className="my-balance-items">
                                <p className="mb-0">Pending</p>
                                <h4 className="mb-0 fs-28">${item.pending}</h4>
                            </div>
                            <div className="my-balance-items">
                                <p className="mb-0">Withdraw</p>
                                <h4 className="d-flex mb-0 fs-28">
                                    <span> {item.withdraw}</span>
                                    <i className="ri-arrow-down-line text-danger ms-10"></i>
                                </h4>
                            </div>
                            <div className="balance-progress">
                                <CircularProgressbar
                                    strokeWidth={10}
                                    value={item.percentWithdraw}
                                    text={`${item.percentWithdraw}%`}
                                />
                            </div>
                        </div>
                </>
            ))}
        </>
    );
}
export default MyBalance;

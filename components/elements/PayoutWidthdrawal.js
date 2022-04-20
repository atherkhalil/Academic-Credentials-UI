import Link from "next/link";
function PayoutWidthdraw() {
    const payoutWidthdrawList = [
        {
            amount: 1257,
            icon: "ri-check-line",
            bgColor: "bg-success-lighten",
            textColor: "text-success"
        },
        {
            amount: 1257,
            icon: "ri-close-line",
            bgColor: "bg-danger-lighten",
            textColor: "text-danger"
        },
        {
            amount: 1257,
            icon: "ri-question-mark",
            bgColor: "bg-warning-lighten",
            textColor: "text-warning"
        },
    ];

    return (
        <>
            {payoutWidthdrawList.map((item, id) => (
                <>
                    <div className="bg-white py-12 px-12 rounded d-flex mb-20 justify-content-between align-items-center align-items-center shadow-sm" key={id}>
                        <div className={`payout-icon ${item.bgColor} ${item.textColor}`}>
                            <i class={item.icon}></i>
                        </div>
                        <div className="flex-grow-1">
                            <h5 className="mb-5">USD {item.amount}</h5>
                            <p className="mb-0">June 9, 2021 09:55 PM </p>
                        </div>
                        <Link href="/">
                            <a className="btn btn-primary">View Details</a>
                        </Link>

                    </div>
                </>
            ))}
        </>
    );
}
export default PayoutWidthdraw;

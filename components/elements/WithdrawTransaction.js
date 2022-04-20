
function WithdrawTransaction() {
    const WithdrawTransactionItem = [
        {
            tr_id: "TQR252CH18",
            desc_title: "Master Card",
            desc_detail: "Withdraw to Master Card",
            date: "April 23, 2021",
            amount: "$180",
            card: "Master Card",
            status: "Payment Pending",
            receipt: "#",
        },
        {
            tr_id: "TQR252CH19",
            desc_title: "Paypal Account",
            desc_detail: "Withdraw to Paypal Account",
            date: "May 17, 2021",
            amount: "$210",
            card: "Paypal Card",
            status: "Payment Complete",
            receipt: "#",
        },
        {
            tr_id: "TQR252CH20",
            desc_title: "Nexus Account",
            desc_detail: "Withdraw to Nexus Card",
            date: "Dec 25, 2020",
            amount: "$165",
            card: "Nexus Card",
            status: "Payment Complete",
            receipt: "#",
        },
        {
            tr_id: "TQR252CH21",
            desc_title: "Teacher's Portal",
            desc_detail: "Withdraw to Master Card Received",
            date: "Nov 21, 2020",
            amount: "$220",
            card: "Edu Account",
            status: "Payment Pending",
            receipt: "#",
        },
        {
            tr_id: "TQR252CH22",
            desc_title: "Vias Card",
            desc_detail: "Payment Received",
            date: "Oct 19, 2021",
            amount: "$280",
            card: "Master Card",
            status: "Payment Complete",
            receipt: "#",
        },
    ];

    return (
        <>
            {WithdrawTransactionItem.map((item, id) => (
                <>

                    <div className="rtable-row" key={id}>
                        <div className="rtable-cell topic-cell">
                            <div className="rtable-cell--content title-content">
                                <h5>{item.desc_title}</h5>
                                <p>{item.desc_detail}</p>
                            </div>
                        </div>
                        <div className="rtable-cell id-cell">
                            <div className="rtable-cell--heading">TR ID</div>
                            <div className="rtable-cell--content date-content">
                                {item.tr_id}
                            </div>
                        </div>
                        <div className="rtable-cell date-cell">
                            <div className="rtable-cell--heading">Date</div>
                            <div className="rtable-cell--content date-content">
                                {item.date}
                            </div>
                        </div>
                        <div className="rtable-cell amount-cell">
                            <div className="rtable-cell--heading">Amount</div>
                            <div className="rtable-cell--content access-link-content">
                                {item.amount}
                            </div>
                        </div>
                        <div className="rtable-cell card-cell">
                            <div className="rtable-cell--heading">Card</div>
                            <div className="rtable-cell--content replay-link-content">
                                {item.card}
                            </div>
                        </div>
                        <div className="rtable-cell rtable-cell--foot status-cell">
                            <div className="rtable-cell--heading">Status</div>
                            <div className="rtable-cell--content purchase-content">
                                {item.status}
                            </div>
                        </div>
                        <div className="rtable-cell rtable-cell--foot receipt-cell">
                            <div className="rtable-cell--heading">Receipt</div>
                            <div className="rtable-cell--content pdf-content">
                                <a href={item.receipt}><i className="ri-file-text-line"></i></a>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}
export default WithdrawTransaction;

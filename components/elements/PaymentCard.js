function PaymentCard() {
    const paymentCardItem = [
        {
            balance: 3356,
            logo: "visa",
            holder: "Saiful Islam",
            valid: "11/21",
            number: "4785 9856 2563 1254"
        },
        {
            balance: 2458,
            logo: "mastercard",
            holder: "Saiful Islam",
            valid: "08/22",
            number: "1457 3254 4788 5687"
        },
        // {
        //     balance: 12400,
        //     logo: "paypal",
        //     holder: "Saiful Islam",
        //     valid: "03/23",
        //     number: "3582 1254 7582 4425"
        // },
    ];

    return (
        <>
            {paymentCardItem.map((item, id) => (
                <>
                    <div className="col-lg-6" key={id}>
                        <div className="cc-card">
                            <div className="cc-card-info">
                                <div>
                                    <p>Balance</p>
                                    <h3>${item.balance}</h3>
                                </div>
                                <img
                                    src={`/images/cc/${item.logo}.png`}
                                    alt=""
                                />
                            </div>
                            <div className="cc-card-number">
                                <h3>
                                    <span>{item.number}</span>
                                </h3>
                            </div>
                            <div className="cc-card-details">
                                <div>
                                    <h5>CARD HOLDER</h5>
                                    <p>{item.holder}</p>
                                </div>
                                <div>
                                    <h5>VALID TILL</h5>
                                    <p>{item.valid}</p>
                                </div>
                                <div>
                                    <img src="/images/cc/sim.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}
export default PaymentCard;

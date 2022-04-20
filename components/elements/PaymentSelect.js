function PaymentSelect() {
    const paymentSelectItem = [
        {
            id: 1,
            logo: "visa",
            brand: "Visa",
            checked: true
        },
        {
            id: 2,
            logo: "mastercard",
            brand: "Master Card",
            checked: true
        },
        {
            id: 3,
            logo: "paypal",
            brand: "Paypal",
            checked: true
        },
    ];

    return (
        <>
            {paymentSelectItem.map((item, id) => (
                <>
                    <div className="payment-method form-check d-flex align-items-center my-12 px-12 py-12 border rounded" key={id}>
                        <input
                            className="form-check-input me-10 ms-0"
                            type="radio"
                            name="flexRadioDefault"
                            id={item.id}
                            checked={item.checked}
                        />
                        <label
                            className="form-check-label d-flex justify-content-between align-items-center flex-grow-1"
                            for={item.id}
                        >
                            <p className="mb-0">Withdraw with {item.brand}</p>
                            <img
                                src={`/images/cc/${item.logo}.png`}
                                alt=""
                                height="20"
                            />
                        </label>
                    </div>
                </>
            ))}
        </>
    );
}
export default PaymentSelect;

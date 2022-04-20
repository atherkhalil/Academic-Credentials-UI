function TopSaleWidget() {
    const topSaleWidgetItem = [
        {
            imgId: "bootstrap",
            title: "Bootstrap Camp",
            category: "Growing designing concept",
            price: 335,
        },
        {
            imgId: "html5",
            title: "Advanced Course of HTML5",
            category: "Real use in real project",
            price: 280,
        },
        {
            imgId: "jquery",
            title: "Project Development using JQuery",
            category: "Implementation of JQuery",
            price: 199,
        },
        {
            imgId: "laravel",
            title: "Basic Learning of Laravel",
            category: "Start up with Laravel",
            price: 135,
        },
    ];

    return (
        <>
            {topSaleWidgetItem.map((item, id) => (
                <>
                    <div className="bg-white py-12 px-12 rounded d-flex mb-20 justify-content-between align-items-center align-items-center shadow-sm" key={id}>
                        <div className="me-15">
                            <img
                                src={`/images/courses/${item.imgId}.png`}
                                width="50"
                            />
                        </div>
                        <div className="flex-grow-1">
                            <h6 className="mb-1 me-10">{item.title}</h6>
                            <p className="mb-0">{item.category}</p>
                        </div>
                        <h6>{item.price}</h6>
                    </div>
                </>
            ))}
        </>
    );
}
export default TopSaleWidget;

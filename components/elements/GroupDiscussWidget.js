function GroupDiscussWidget() {
    const groupDiscussWidgetItem = [
        {
            imgId: "html5",
            title: "HTML5",
            category: "Design",
            students: 305,
            textColor: "text-primary"
        },
        {
            imgId: "css3",
            title: "CSS3",
            category: "Design",
            students: 135,
            textColor: "text-danger"
        },
        {
            imgId: "jquery",
            title: "JQuery",
            category: "Design",
            students: 158,
            textColor: "text-warning"
        },
        {
            imgId: "laravel",
            title: "Laravel",
            category: "Design",
            students: 232,
            textColor: "text-info"
        },
    ];

    return (
        <>
            {groupDiscussWidgetItem.map((item, id) => (
                <>
                    <div className="col-md-6 col-xl-12">
                        <div className="bg-white py-12 px-12 rounded d-flex mb-20 justify-content-between align-items-center align-items-center shadow-sm ">

                            <img
                                src={`/images/courses/${item.imgId}.png`}
                                width="50"
                                height="50"
                                className="me-10"
                            />
                            <div className="flex-grow-1">
                                <h6 className="mb-1">{item.title}</h6>
                                <p className="mb-0">{item.category}</p>
                            </div>
                            <h5 className={item.textColor}>{item.students}K+</h5>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}
export default GroupDiscussWidget;

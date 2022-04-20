function AllMessagesWidget() {
    const allMessagesWidgetList = [
        {
            imgId: 1,
            title: "Alex Morphy",
            text: "How can I do this?",
            time: "11:53 AM",
        },
        {
            imgId: 1,
            title: "Alex Morphy",
            text: "How can I do this?",
            time: "11:53 AM",
        },
        {
            imgId: 1,
            title: "Alex Morphy",
            text: "How can I do this?",
            time: "11:53 AM",
        },
        {
            imgId: 1,
            title: "Alex Morphy",
            text: "How can I do this?",
            time: "11:53 AM",
        },
        {
            imgId: 1,
            title: "Alex Morphy",
            text: "How can I do this?",
            time: "11:53 AM",
        },
        {
            imgId: 1,
            title: "Alex Morphy",
            text: "How can I do this?",
            time: "11:53 AM",
        },
        {
            imgId: 1,
            title: "Alex Morphy",
            text: "How can I do this?",
            time: "11:53 AM",
        },
    ];

    
    return (
        <>
            {allMessagesWidgetList.map((item, id) => (
                <>
                    <div className="d-flex justify-content-between align-items-center py-8 px-162 gap-3 bg-white my-8" key={id}>
                        <img
                            src={`/images/avatar/${item.imgId}.jpg`}
                            alt=""
                            className="rounded"
                            width="35"
                        />
                        <div className="flex-grow-1 ">
                            <h5 className="mb-0">{item.title}</h5>
                            <p className="mb-0">{item.text}</p>
                        </div>
                        <div>{item.time}</div>
                    </div>
                </>
            ))}
        </>
    );
}
export default AllMessagesWidget;

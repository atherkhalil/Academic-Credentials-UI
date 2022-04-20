function ChatMessagesText() {
    const chatMessageTextItem = [
        {
            senderImgId: 1,
            receiverImgId: 2,
            senderText: "You can change the order",
            receiverText: "How can I do this?",
        },
        {
            senderImgId: 1,
            receiverImgId: 2,
            senderText: "You can change the order",
            receiverText: "How can I do this?",
        },
        {
            senderImgId: 1,
            receiverImgId: 2,
            senderText: "You can change the order",
            receiverText: "How can I do this?",
        },
        {
            senderImgId: 1,
            receiverImgId: 2,
            senderText: "You can change the order",
            receiverText: "How can I do this?",
        },
    ];

    return (
        <>
            {chatMessageTextItem.map((item, id) => (
                <>
                    <div className="message-chat-sender d-flex align-items-center my-162" key={id}>
                        <img
                            src={`/images/avatar/${item.senderImgId}.jpg`}
                            width="35"
                            alt=""
                            className="rounded me-16"
                        />
                        <p className="rounded mw-75 bg-light py-8 px-162 mb-0">
                            {item.senderText}
                        </p>
                    </div>
                    <div className="message-chat-receiver d-flex justify-content-end align-items-center my-162">
                        <p className="rounded bg-primary py-8 px-162 mb-0 me-16 text-white">
                            {item.receiverText}
                        </p>
                        <img
                            src={`/images/avatar/${item.receiverImgId}.jpg`}
                            width="35"
                            alt=""
                            className="rounded"
                        />
                    </div>
                </>
            ))}
        </>
    );
}
export default ChatMessagesText;

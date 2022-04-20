import Layout from "../components/layout/Layout";

function MessageChat() {
    return (
        <>
            <Layout
                headTitle="Message Chat"
                pageTitle="Message Chat"
                pageTitleSub={"Welcome to Edunet Message Chat page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Message Video"}
            >
                <div className="row">
                    <div className="col-9">
                        <div className="card">
                            <div className="card-body message">
                                <div className="message-video">
                                    <div className="message-video-top-bar gap-3 d-flex justify-content-between align-items-center">
                                        <div className="message-video-timer">
                                            <p>
                                                <span className="dot active"></span>
                                                03.25
                                            </p>
                                        </div>
                                        <img
                                            src="/images/avatar/10.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="message-video-screen">
                                        <img
                                            src="/images/bg/7.jpg"
                                            className="rounded"
                                            alt=""
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                    <div className="message-video-bottom-bar gap-3">
                                        <a href="#">
                                            <i className="ri-fullscreen-line"></i>
                                        </a>
                                        <a href="#">
                                            <i className="ri-mic-fill"></i>
                                        </a>
                                        <a href="#">
                                            <i className="ri-vidicon-fill active"></i>
                                        </a>
                                        <a href="#">
                                            <i className="ri-phone-fill"></i>
                                        </a>
                                        <a href="#">
                                            <i className="ri-computer-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="message-chat d-flex flex-column">
                                    <div className="gap-3 cc-card-title d-flex justify-content-between align-items-center">
                                        <img
                                            src="/images/avatar/10.jpg"
                                            width="70"
                                            alt=""
                                            className="rounded"
                                        />
                                        <div className="flex-grow-1">
                                            <h5>Janifer Shaun</h5>
                                            <p>
                                                Online <span className="dot"></span>
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="message-chat-sendar d-flex align-items-start my-12">
                                        <img
                                            src="/images/avatar/10.jpg"
                                            width="35"
                                            alt=""
                                            className="rounded me-16"
                                        />
                                        <p className="rounded mw-75 bg-light py-8 px-12 mb-0">
                                            You can change the order
                                        </p>
                                    </div>
                                    <div className="message-chat-receiver d-flex justify-content-end align-items-center my-12">
                                        <p className="rounded bg-primary py-8 px-12 mb-0 me-16 text-white">
                                            How can I do this?
                                        </p>
                                        <img
                                            src="/images/avatar/9.jpg"
                                            width="35"
                                            alt=""
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="message-chat-sendar d-flex align-items-start my-12">
                                        <img
                                            src="/images/avatar/10.jpg"
                                            width="35"
                                            alt=""
                                            className="rounded me-16"
                                        />
                                        <p className="rounded bg-light py-8 px-12 mb-0">
                                            You can change the order
                                        </p>
                                    </div>
                                    <div className="message-chat-receiver d-flex justify-content-end align-items-center my-12">
                                        <p className="rounded bg-primary py-8 px-12 mb-0 me-16 text-white">
                                            How can I do this?
                                        </p>
                                        <img
                                            src="/images/avatar/9.jpg"
                                            width="35"
                                            alt=""
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="message-chat-sendar d-flex align-items-start my-12">
                                        <img
                                            src="/images/avatar/10.jpg"
                                            width="35"
                                            alt=""
                                            className="rounded me-16"
                                        />
                                        <p className="rounded bg-light py-8 px-12 mb-0">
                                            You can change the order
                                        </p>
                                    </div>
                                    <div className="message-chat-receiver d-flex justify-content-end align-items-center my-12">
                                        <p className="rounded bg-primary py-8 px-12 mb-0 me-16 text-white">
                                            How can I do this?
                                        </p>
                                        <img
                                            src="/images/avatar/9.jpg"
                                            width="35"
                                            alt=""
                                            className="rounded"
                                        />
                                    </div>
                                    <div className="message-chat-sendar d-flex align-items-start my-12">
                                        <img
                                            src="/images/avatar/10.jpg"
                                            width="35"
                                            alt=""
                                            className="rounded me-16"
                                        />
                                        <p className="rounded bg-light py-8 px-12 mb-0">
                                            You can change the orderYou can
                                            change the orderYou can change the
                                            orderYou can change the orderYou can
                                            change the order
                                        </p>
                                    </div>
                                    <div className="message-chat-receiver d-flex justify-content-end align-items-center my-12">
                                        <p className="rounded bg-primary py-8 px-12 mb-0 me-16 text-white">
                                            How can I do this?
                                        </p>
                                        <img
                                            src="/images/avatar/9.jpg"
                                            width="35"
                                            alt=""
                                            className="rounded"
                                        />
                                    </div>
                                    <hr />
                                    <div className="position-absolute bottom-0 d-flex align-items-center gap-3">
                                        <a href="">
                                            <i className="ri-attachment-2 fs-4"></i>
                                        </a>
                                        <a href="">
                                            <i className="ri-mic-line fs-4"></i>
                                        </a>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Type here"
                                        />
                                        <button className="btn btn-outline-primary">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default MessageChat;

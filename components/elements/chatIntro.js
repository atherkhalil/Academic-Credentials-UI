const ChatIntro = (props) => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center w-100 ">
                <div className="text-center">
                    <img
                        className="mb-40 img-fluid"
                        src="/images/bg/8.jpg"
                        alt=""
                        style={{maxWidth:"300px"}}
                    />
                    <h3>Welcome to Edunet live chat!</h3>
                    <p className="mb-0">You'r loged in as Faiyaz Abdullah</p>
                    <p>
                        Try to switching your account if you don't find your
                        contacts
                    </p>
                    <div>
                        <button
                            type="button"
                            className="btn btn-primary mt-10 me-16"
                        >
                            Create Group
                        </button>
                        <button
                            type="button"
                            className="btn btn-dark mt-10 "
                        >
                            Chat Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ChatIntro;

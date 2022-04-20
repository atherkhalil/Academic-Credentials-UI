import Link from "next/link";

function Test() {
    return (
        <>
            <div className="verification section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center my-16">
                                <Link href="/">
                                    <a>
                                        <img src="./images/logo.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            <div className="card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">
                                        Verify your Email
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form className="identity-upload">
                                        <div className="identity-content">
                                            <span className="icon">
                                                <i className="ri-mail-check-line"></i>
                                            </span>
                                            <p>
                                                We sent verification email to
                                                &nbsp;
                                                <strong className="text-dark">
                                                    example@email.com
                                                </strong>
                                                . Click the link inside to get
                                                started!
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <Link href="/signup">
                                    <a>Email didn't arrive?</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Test;

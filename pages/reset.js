import Link from "next/link";
function Reset() {
    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-4 col-md-5">
                            <div className="mini-logo text-center my-12">
                                <Link href="/">
                                    <a>
                                        <img src="./images/logo.png" alt="" />
                                    </a>
                                </Link>
                            </div>
                            <div className="card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">
                                        Reset Password
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form className="g-3">
                                            <label className="form-label">
                                                Email
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="***********"
                                            />
                                        <div className="mt-16">
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                
                                <div className="new-account mt-16">
                                        <p>
                                            Don't get code?
                                            <Link href="/otp1">
                                                <a className="text-primary ms-5">
                                                    Resend
                                                </a>
                                            </Link>
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Reset;

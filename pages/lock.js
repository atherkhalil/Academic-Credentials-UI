import Link from "next/link";
function Lock() {
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
                                    <h4 className="card-title">Locked</h4>
                                </div>
                                <div className="card-body">
                                    <form className="row g-3">
                                        <div className="col-12">
                                            <label className="form-label">
                                                Enter Password
                                            </label>

                                            <input
                                                type="password"
                                                className="form-control"
                                                placeholder="***********"
                                            />
                                        </div>
                                        <div className="text-center mt-16">
                                            <button
                                                type="submit"
                                                className="btn btn-primary w-100"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Lock;

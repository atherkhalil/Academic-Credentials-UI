import Link from "next/link";
import HeaderLanding from "../components/layout/HeaderLanding";
function Demo() {
    return (
        <>
            <div id="main-wrapper">
                <HeaderLanding />
                <div className="intro section-padding bg-white" id="intro">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-xl-8">
                                <div className="intro-content my-20 text-center">
                                    <h2>
                                        Edunet - Personal Learning Management
                                        System React, Redux, NextJs UI Kit
                                    </h2>
                                    <p>
                                        Edunet is the complete UX & UI
                                        dashboard for online Learning Management
                                        System. Here included Courses, Status,
                                        Wallet etc. Actually here focused on
                                        individual course provider or trainer.
                                        Here also included profile, application,
                                        activity, payment method, api, sign in &
                                        sign up etc.
                                    </p>
                                </div>
                            </div>
                            {/* <div className="col-xl-5 col-md-6 py-md-5">
                                <div className="intro-demo_img">
                                    <img
                                        src="/images/demo/demo.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="demo section-padding">
                    <div className="container">
                        <div className="row py-lg-5 justify-content-center">
                            <div className="col-xl-7">
                                <div className="section-title text-center">
                                    <h2>Pages</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/home.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Dashboard</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/wallet">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/wallet.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Wallet</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/courses">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/courses.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Courses</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/upload">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/upload.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Upload</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/leader-board">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/leader-board.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Leader Board</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/withdraw">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/my-card.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>My Card</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/create-group">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/create-group.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Create Group</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/settings-profile">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/setting-profile.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Profile Settings</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/profile">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/profile.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>User Profile</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/settings-application">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/setting-application.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Application</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/settings-security">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/setting-security.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Security</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/settings-activity">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/setting-activity.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Activity</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/settings-payment-method">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/setting-payment-method.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Payment Method</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/settings-api">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/setting-api.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Api</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/signin">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/signin.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Sign in Page</h4>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/signup">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/signup.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Sign up page</h4>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="/lock">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="/images/demo/lock.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Locked Page</h4>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="./otp1" target="_blank">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="./images/demo/otp1.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>1 of 2-Step-Verification</h4>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="./otp2" target="_blank">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="./images/demo/otp2.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>2 of 2-Step-Verification</h4>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="./verify-email" target="_blank">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="./images/demo/verify-email.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Email Verification</h4>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-4 col-sm-6">
                                <div className="demo_img">
                                    <Link href="./reset" target="_blank">
                                        <a>
                                            <div className="img-wrap">
                                                <img
                                                    src="./images/demo/reset.jpg"
                                                    alt=""
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                    <h4>Reset Page</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Demo;

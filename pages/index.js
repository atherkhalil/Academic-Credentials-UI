import Link from "next/link";
import SigninForm from "../components/form/SigninForm";
import Animatehoc from "../shared/HocWappers/AnimateHoc.js";

function Signin() {
    return (
        <>
            <div className="authincation section-padding">
                <div className="container h-100">
                    <div className="row justify-content-center h-100 align-items-center">
                        <div className="col-xl-5 col-md-6">
                            <div className="mini-logo text-center mb-35">
                                <Link href="/">
                                    <a>
                                        <img src="./images/University_of_Sharjah_Logo.png" alt="" with="150" height="150" />
                                    </a>
                                </Link>
                            </div>
                            <div className="card">
                                <div className="card-header justify-content-center">
                                    <h4 className="card-title">Sign in</h4>
                                </div>
                                <div className="card-body">
                                    <SigninForm />
                                    <p className="mt-16 mb-0">
                                        Don't have an account?
                                        <Link href="/signup">
                                            <a className="text-primary">
                                                Sign up
                                            </a>
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            <div className="privacy-link">
                                <Link href="#">
                                    <a>
                                        Have an issue with 2-factor
                                        authentication?
                                    </a>
                                </Link>
                                <br />
                                <Link href="#">
                                    <a>Privacy Policy</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Animatehoc(Signin);

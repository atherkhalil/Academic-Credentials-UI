import Link from "next/link";
import { useRouter } from "next/router";
import Animatehoc from "../shared/HocWappers/AnimateHoc.js";

function VerifyEmail() {
  const { query } = useRouter();

  return (
    <>
      <div className="container vh-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            <div className="mini-logo text-center my-16">
              <Link href="/">
                <a>
                  <img
                    src="../images/University_of_Sharjah_Logo.png"
                    alt=""
                    with="150"
                    height="150"
                  />
                </a>
              </Link>
            </div>
            <div className="card">
              <div className="card-header justify-content-center">
                <h4 className="card-title text-primary">Welcome</h4>
              </div>
              <div className="card-body">
                <form className="identity-upload">
                  <div className="identity-content">
                    <span className="icon">
                      <i className="ri-history-line"></i>
                    </span>
                    <p className="mb-0">Your profile is under review by</p><br />
                    <p><b>Ministry of Education</b></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Animatehoc(VerifyEmail);

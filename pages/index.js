import React, { useState } from "react";
import Link from "next/link";
import SigninForm from "../components/form/SigninForm";
import Animatehoc from "../shared/HocWappers/AnimateHoc.js";
import SelectUserTypeCard from "../components/general/SelectUserTypeCard.js";

const userTypeList = [
  {
    key: "issuer",
    text: "ISSUER",
    icon: "ri-government-line",
    isSelectedIndex: 0,
    signupLink: "/issuer/signup",
  },
  {
    key: "student",
    text: "STUDENT",
    icon: "ri-shield-user-line",
    isSelectedIndex: 1,
  },
];

function Signin() {
  const [isSelected, setIsSelected] = useState(0);

  const _hanldeSelectedUserType = (index) => {
    setIsSelected(index);
  };
  return (
    <>
      <div className="container vh-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            <div className="mini-logo text-center mb-35">
              <Link href="/">
                <a>
                  <img
                    src="./images/University_of_Sharjah_Logo.png"
                    alt=""
                    with="150"
                    height="150"
                  />
                </a>
              </Link>
            </div>
            <div className="card">
              <div className="card-header justify-content-center">
                <h4 className="card-title">Sign in as</h4>
              </div>
              <div className="card-body">
                <div className="row justify-content-around">
                  {userTypeList.map((item, index) => (
                    <SelectUserTypeCard
                      text={item.text}
                      icon={item.icon}
                      isSelected={isSelected == item.isSelectedIndex}
                      itemSelectedIndex={item.isSelectedIndex}
                      _hanldeSelectedUserType={_hanldeSelectedUserType}
                    />
                  ))}
                </div>

                <SigninForm />

                {/* For Issuer only */}
                {isSelected == 0 && (
                  <p className="mt-16 mb-0">
                    Don't have an account?
                    <Link href={userTypeList[0].signupLink}>
                      <a className="text-primary ml-2">Sign up</a>
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Animatehoc(Signin);

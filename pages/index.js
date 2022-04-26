import React, { useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import Animatehoc from "../shared/HocWappers/AnimateHoc.js";
import { useMutation } from "@apollo/client";
import { IssuerLogin } from "../graphql/mutations/authentication.mutation.js";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import {
  SetUserContext,
  ToggleVerifyModal,
} from "../redux/actions/global.action.js";
import {
  SetCurrentUser
} from "../redux/actions/user.action.js";
import SigninForm from "../components/form/SigninForm";
import SelectUserTypeCard from "../components/general/SelectUserTypeCard.js";
import VerifyOtpModal from "../components/VerifyOtpModal/VerifyOtpModal";
import { ActivateIssuer } from "../graphql/mutations/authentication.mutation.js";

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

const initialValues = {
  email: "",
  password: "",
};

const SigninFormSchema = Yup.object().shape({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Signin() {
  const [isSelected, setIsSelected] = useState(0);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const showVerifyModal = useSelector((state) => state.Global.showVerifyModal);
  const currentUserDetials = useSelector((state) => state?.User);
  const [issuerLoginMutation, { data, loading, error }] =
    useMutation(IssuerLogin);
  const [
    activateIssuerMutation,
    {
      activateIssuerData,
      activateIssuerMutationLoading,
      activateIssuerMutationError,
    },
  ] = useMutation(ActivateIssuer);

  const _handleSubmit = (state) => {
    issuerLoginMutation({
      variables: {
        email: state.email,
        password: state.password,
      },
      onCompleted: (res) => {
        console.log("issuerLoginMutation res: ", res);
        enqueueSnackbar("Successfully sign in!", {
          variant: "success",
        });

        // Setting & dispatching token
        const token = res.IssuerLogin.token;
        localStorage.setItem("certmate_token", token);
        var decodedToken = jwt_decode(token);
        dispatch(SetUserContext(decodedToken.currentLogin));
        dispatch(SetCurrentUser(decodedToken));
        _handleToggleOtpVerificationModal();
      },
    });
  };

  const _handleOtpVerification = (otp) => {
    activateIssuerMutation({
      variables: {
        otp: otp,
        issuerId: currentUserDetials.currentuser.user._id
      },
      onCompleted: (res) => {
        console.log("activateIssuerMutation res: ", res);
        enqueueSnackbar("OTP verified successfully!", {
          variant: "success",
        });
        const token = res.ActivateIssuer;
        setTimeout(() => {
          localStorage.setItem("certmate_token", token);
          router.push(`/issuer/dashboard`);
        }, 500);
      },
      onError: (errors) => {
        console.log("errors: ", errors.message);
        enqueueSnackbar(errors.message, {
          variant: "error",
        });
      },
    });
  };

  const _handleToggleOtpVerificationModal = () => {
    dispatch(ToggleVerifyModal(!showVerifyModal));
  };

  const _hanldeSelectedUserType = (index) => {
    setIsSelected(index);
  };

  if (error) {
    return enqueueSnackbar("Oops! Something went wrong!", {
      variant: "error",
    });
  }

  return (
    <>
      {
        showVerifyModal && (
          <VerifyOtpModal
            toggle={showVerifyModal}
            setToggle={_handleToggleOtpVerificationModal}
            _handleOtpVerification={_handleOtpVerification}
          />
        )
      }

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

                {/* For Issuer only */}
                {isSelected == 0 ? (
                  <>
                    <SigninForm
                      initialValues={initialValues}
                      SigninFormSchema={SigninFormSchema}
                      handleSubmit={_handleSubmit}
                      loading={loading}
                    />
                    <p className="mt-16 mb-0">
                      Don't have an account?
                      <Link href={userTypeList[0].signupLink}>
                        <a className="text-primary ml-2">Sign up</a>
                      </Link>
                    </p>
                  </>
                ) : (
                  <SigninForm />
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

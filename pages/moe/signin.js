import React, { useState } from "react";
import Link from "next/link";
import MoeSigninForm from "../../components/form/MoeSigninForm";
import * as Yup from "yup";
import Animatehoc from "../../shared/HocWappers/AnimateHoc.js";
import { useMutation } from "@apollo/client";
import { MOELoginMutation } from "../../graphql/mutations/authentication.mutation.js";
import { Spinner } from "reactstrap";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { SetCurrentUser } from "../../redux/actions/user.action.js";
import { SetUserContext, ToggleVerifyModal } from "../../redux/actions/global.action.js";
import { ActivateMOEMutation } from "../../graphql/mutations/authentication.mutation.js";
import VerifyOtpModal from "../../components/modal/VerifyOtpModal/VerifyOtpModal.js";

const initialValues = {
  adminEmail: "",
  password: "",
};

const SignupFormSchema = Yup.object().shape({
  adminEmail: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function SignUp() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const showVerifyModal = useSelector((state) => state.Global.showVerifyModal);
  const currentUserDetials = useSelector((state) => state?.User);
  const [moeLoginMutation, { data, loading, error }] =
    useMutation(MOELoginMutation);
  const [
    activateMOEMutation,
    {
      activateMOEMutationData,
      activateMOEMutationLoading,
      activateMOEMutationError,
    },
  ] = useMutation(ActivateMOEMutation);

  const _handleSubmit = (state) => {
    moeLoginMutation({
      variables: {
        email: state.adminEmail,
        password: state.password,
      },
      onCompleted: (res) => {
        console.log("moeLoginMutation res: ", res);
        enqueueSnackbar("Successfully sign in!", {
          variant: "success",
        });

        // Setting & dispatching token
        const token = res.MOELogin.token;
        localStorage.setItem("certmate_token", token);
        var decodedToken = jwt_decode(token);
        console.log("token moe signin: ", token)
        dispatch(SetUserContext(decodedToken.currentLogin));
        dispatch(SetCurrentUser(decodedToken));
        _handleToggleOtpVerificationModal();
      },
    });
  };

  const _handleOtpVerification = (otp) => {
    activateMOEMutation({
      variables: {
        opt: otp,
        moeId: currentUserDetials.currentuser.user._id,
      },
      onCompleted: (res) => {
        console.log("activateMOEMutation res: ", res);
        enqueueSnackbar("OTP verified successfully!", {
          variant: "success",
        });
        const token = res.ActivateMOE;
        setTimeout(() => {
          localStorage.setItem("certmate_token", token);
          router.push(`/moe/dashboard`);
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

  if (error) {
    enqueueSnackbar("Oops! Something went wrong!", {
      variant: "error",
    });
  }

  const _handleToggleOtpVerificationModal = () => {
    dispatch(ToggleVerifyModal(!showVerifyModal));
  };

  return (
    <>
      {showVerifyModal && (
        <VerifyOtpModal
          toggle={showVerifyModal}
          setToggle={_handleToggleOtpVerificationModal}
          _handleOtpVerification={_handleOtpVerification}
        />
      )}

      <div className="container vh-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-xl-5 col-md-6">
            <div className="mini-logo text-center my-16">
              <Link href="/">
                <a>
                  <img
                    src="../../images/University_of_Sharjah_Logo.png"
                    alt=""
                    with="150"
                    height="150"
                  />
                </a>
              </Link>
            </div>
            <div className="card">
              <div className="card-header justify-content-center">
                <h3 className="p-0 m-0 text-primary">Ministry of Education</h3>
              </div>
              <div className="card-header justify-content-center">
                <h4 className="card-title p-0 m-0">Sign in</h4>
              </div>
              <div className="card-body">
                <MoeSigninForm
                  initialValues={initialValues}
                  SignupFormSchema={SignupFormSchema}
                  handleSubmit={_handleSubmit}
                  loading={loading}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Animatehoc(SignUp);

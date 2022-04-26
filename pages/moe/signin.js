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
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { SetUserContext } from "../../redux/actions/global.action.js";

const initialValues = {
  adminEmail: "",
  password: ""
};

const SignupFormSchema = Yup.object().shape({
  adminEmail: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
});

function SignUp() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const dispatch = useDispatch();
  const [moeLoginMutation, { data, loading, error }] = useMutation(
    MOELoginMutation
  );

  const _handleSubmit = (state) => {
    moeLoginMutation({
      variables: {
        email: state.adminEmail,
        password: state.password
      },
      onCompleted: (res) => {
        console.log("moeLoginMutation res: ", res)
        enqueueSnackbar("OTP verified successfully!", {
          variant: "success",
        });

        const token = res.MOELogin.token;
        var decodedToken = jwt_decode(token);
        dispatch(SetUserContext(decodedToken.currentLogin));

        router.push(`/moe/dashboard`);
      },
    });
  };

  if (error) {
    return enqueueSnackbar("Oops! Something went wrong!", {
      variant: "error",
    });
  }

  return (
    <>
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

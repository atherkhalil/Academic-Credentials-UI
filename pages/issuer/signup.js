import React, { useState } from "react";
import Link from "next/link";
import IssuerSignupForm from "../../components/form/IssuerSignupForm.js"
import * as Yup from "yup";
import Animatehoc from "../../shared/HocWappers/AnimateHoc.js";
import { useMutation } from "@apollo/client";
import { IssuerOnBoardingMutation } from "../../graphql/mutations/authentication.mutation.js";
import { Spinner } from "reactstrap";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { issuerTypes } from "../../shared/constants.js";

const initialValues = {
  type: "ACCREDITED",
  name: "",
  adminEmail: "",
  telephone: "",
  siteUrl: "",
  description: "",
  acceptTerms: false
};

const SignupFormSchema = Yup.object().shape({
  type: Yup.string().required("Issuer type is required"),
  name: Yup.string().required("Name is required"),
  adminEmail: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  telephone: Yup.string().required("Phone no. is required"),
  siteUrl: Yup.string().required("Site url is required"),
  acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

function SignUp() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const [issuerOnBoardingMutation, { data, loading, error }] = useMutation(
    IssuerOnBoardingMutation
  );

  const _handleSubmit = (state) => {
    console.log("Submitting state... : ", state)
    delete state.acceptTerms;
    issuerOnBoardingMutation({
      variables: {
        data: {
          type: state.type,
          name: state.name,
          adminEmail: state.adminEmail,
          telephone: state.telephone,
          siteUrl: state.siteUrl,
          description: state.description
        },
      },
      onCompleted: () => {
        router.push(`/under-review`);
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
                  <h3 className="p-0 m-0 text-primary">
                    Institute
                  </h3>
                </div>
                <div className="card-header justify-content-center">
                  <h4 className="card-title p-0 m-0">Sign up</h4>
                </div>
                <div className="card-body">
                  <IssuerSignupForm
                    initialValues={initialValues}
                    SignupFormSchema={SignupFormSchema}
                    handleSubmit={_handleSubmit}
                    loading={loading}
                    issuerTypes={issuerTypes}
                  />

                  <div className="text-center">
                    <p className="mt-16 mb-0">
                      Have account?
                      <Link href="/">
                        <a className="text-primary ms-5">Sign in</a>
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
export default Animatehoc(SignUp);

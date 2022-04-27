import React, { useState } from "react";
import Link from "next/link";
import MoeSignupForm from "../../components/form/MoeSignupForm";
import * as Yup from "yup";
import Animatehoc from "../../shared/HocWappers/AnimateHoc.js";
import { useMutation } from "@apollo/client";
import { MoeOnBoardingMutation } from "../../graphql/mutations/authentication.mutation.js";
import { Spinner } from "reactstrap";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const initialValues = {
  name: "",
  adminEmail: "",
  telephone: "",
  contactEmail: "",
  siteUrl: "",
  acceptTerms: false,
};

const SignupFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  adminEmail: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  contactEmail: Yup.string()
    .email("Contact Email is invalid")
    .required("Contact Email is required"),
  telephone: Yup.string().required("Phone no. is required"),
  siteUrl: Yup.string().required("Site url is required"),
  acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
});

function SignUp() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const [moeOnBoardingMutation, { data, loading, error }] = useMutation(
    MoeOnBoardingMutation
  );

  const _handleSubmit = (state) => {
    delete state.acceptTerms;
    moeOnBoardingMutation({
      variables: {
        data: {
          name: state.name,
          adminEmail: state.adminEmail,
          telephone: state.telephone,
          contactEmail: state.contactEmail,
          siteUrl: state.siteUrl,
          acceptTerms: state.acceptTerms,
        },
      },
      onCompleted: () => {
        router.push(`/verify-email?email=${state.adminEmail}`);
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
                    Ministry of Education
                  </h3>
                </div>
                <div className="card-header justify-content-center">
                  <h4 className="card-title p-0 m-0">Sign up</h4>
                </div>
                <div className="card-body">
                  <MoeSignupForm
                    initialValues={initialValues}
                    SignupFormSchema={SignupFormSchema}
                    handleSubmit={_handleSubmit}
                    loading={loading}
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

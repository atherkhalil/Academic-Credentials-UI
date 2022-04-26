import React, { useState, useEffect } from "react";
import Link from "next/link";
import MoeSetPasswordForm from "../../components/form/MoeSetPasswordForm";
import * as Yup from "yup";
import Animatehoc from "../../shared/HocWappers/AnimateHoc.js";
import { useMutation } from "@apollo/client";
import { SetMoePasswordMutation } from "../../graphql/mutations/authentication.mutation.js";
import { Spinner } from "reactstrap";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const initialValues = {
  password: "",
  confirmPassword: "",
  email: "",
  //   moeLoginPassword2: "",
};

const SetPassswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Your password is too short."),
  confirmPassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

function SignUp() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { query, push } = useRouter();
  const [emailstate, setEmailState] = useState(null);
  const [setMoePasswordMutation, { data, loading, error }] = useMutation(
    SetMoePasswordMutation
  );

  useEffect(() => {
    if (query.email) {
      setEmailState(query.email);
    }
  }, [query]);

  const _handleSubmit = (state) => {
    console.log("state: ", state);
    setMoePasswordMutation({
      variables: {
        password: state.password,
        confirmPassword: state.confirmPassword,
      },
      fetchOptions: {
        headers: {
          "Authorization": query.token,
        },
      },
      onCompleted: () => {
        enqueueSnackbar("OTP verified successfully!", {
          variant: "success",
        });
        setTimeout(() => {
          push(`/moe/signin`);
        }, 500);
      },
      onError: () => {
        console.log("errors: ", errors.message);
        enqueueSnackbar(errors.message, {
          variant: "error",
        });
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
                <h4 className="card-title p-0 m-0">Set up password</h4>
              </div>
              <div className="card-body">
                <MoeSetPasswordForm
                  initialValues={initialValues}
                  SetPassswordSchema={SetPassswordSchema}
                  handleSubmit={_handleSubmit}
                  emailstate={emailstate}
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

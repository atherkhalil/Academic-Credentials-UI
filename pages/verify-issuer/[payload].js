import React, { useState, useEffect } from "react";
import Link from "next/link";
import * as Yup from "yup";
import Animatehoc from "../../shared/HocWappers/AnimateHoc.js";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Spinner } from "reactstrap";
import { GetIssuerDetail } from "../../graphql/queries/authentication.query.js";
import { ActivateIssuer } from "../../graphql/mutations/authentication.mutation.js";
import VerifyOtpInput from "../../components/VerifyOtpInput";

const initialValues = {
  otp: "",
};

const SignupFormSchema = Yup.object().shape({
  otp: Yup.string().required("OTP is required"),
});

function VerifyIssuer() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { query, push } = useRouter();
  const [qrCodeState, setQrCodeState] = useState(null);
  const { loading, error, data } = useQuery(GetIssuerDetail, {
    variables: { issuerId: query.payload },
  });
  const [
    activateMOEMutation,
    {
      activateIssuerData,
      activateIssuerMutationLoading,
      activateIssuerMutationError,
    },
  ] = useMutation(ActivateIssuer);

  useEffect(() => {
    if (data) {
      setQrCodeState(data.GetIssuerDetail.qrCode);
    }
  }, [data]);

  const _handleSubmit = (state) => {
    activateMOEMutation({
      variables: {
        otp: state.otp,
        issuerId: query.payload,
      },
      onCompleted: (res) => {
        enqueueSnackbar("OTP verified successfully!", {
          variant: "success",
        });
        const token = res.ActivateIssuer;
        setTimeout(() => {
          localStorage.setItem("certmate_token", token);
          push(`/issuer/set-password?email=${data.GetIssuerDetail.adminEmail}`);
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

  if (activateIssuerMutationError) {
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

            {loading ? (
              <div style={{ position: "absolute", top: "50%", left: "50%" }}>
                <Spinner color="primary" children=""></Spinner>
              </div>
            ) : (
              <div className="card">
                <div className="card-header justify-content-center">
                  <h4 className="text-primary">
                    Please scan QR code and Verify OTP
                  </h4>
                </div>
                <div className="card-body p-0 m-0">
                  <div className="identity-upload">
                    <div className="identity-content">
                      <img src={qrCodeState} width="280px" height="auto" />
                    </div>
                    <VerifyOtpInput
                      initialValues={initialValues}
                      SignupFormSchema={SignupFormSchema}
                      handleSubmit={_handleSubmit}
                      loading={loading}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Animatehoc(VerifyIssuer);

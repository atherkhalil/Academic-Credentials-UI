import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Spinner } from "reactstrap";
import { useSnackbar } from "notistack";
import { useMutation } from "@apollo/client";
import * as Yup from "yup";
import { GetMOEDetailsQuery } from "../../graphql/queries/authentication.query.js";
import { ActivateMOEMutation } from "../../graphql/mutations/authentication.mutation.js";
import Animatehoc from "../../shared/HocWappers/AnimateHoc.js";
import VerifyOtpInput from "../../components/VerifyOtpInput/index.js";

const initialValues = {
    otp: ""
};

const OTPSchema = Yup.object().shape({
    otp: Yup.string().required("OTP is required")
});

function Verify() {
    const { query } = useRouter();
    const [qrCodeState, setQrCodeState] = useState(null);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const { loading, error, data } = useQuery(GetMOEDetailsQuery, {
        variables: { moeId: query.payload },
    });
    const [activateMOEMutation, { activateMOEMutationData, activateMOEMutationLoading, activateMOEMutationError }] = useMutation(
        ActivateMOEMutation
    );

    useEffect(() => {
        if (data) {
            setQrCodeState(data.GetMOEDetails.qrCode);
        }
    }, [data]);

    const _handleOTP = (fields) => {
        enqueueSnackbar("Successfully Verified OTP!", {
            variant: "success",
        });
        activateMOEMutation({
            variables: {
                data: {
                    otp: state.otp
                },
            },
            onCompleted: () => {
                router.push(`/verify-email?email=${state.adminEmail}`);
            },
        });
    };

    if (activateMOEMutationError) {
        console.log("activateMOEMutationError: ", activateMOEMutationError)
      return enqueueSnackbar("Oops! Something went wrong!", {
        variant: "error",
      });
    }

    return (
        <>
            <div className="verification section-padding">
                <div className="container h-100">
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
                                <div style={{ position: 'absolute', top: "50%", left: "50%" }}>
                                    <Spinner color="primary" children=""></Spinner>
                                </div>
                            ) : (
                                <div className="card">
                                    <div className="card-header justify-content-center">
                                        <h4 className="text-primary">Please scan QR code and Verify OTP</h4>
                                    </div>
                                    <div className="card-body p-0 m-0">
                                        <form className="identity-upload">
                                            <div className="identity-content">
                                                <img src={qrCodeState} width="280px" height="auto" />
                                            </div>
                                            <VerifyOtpInput
                                                initialValues={initialValues}
                                                OTPSchema={OTPSchema}
                                                _handleOTP={_handleOTP}
                                                loading={activateMOEMutationLoading}
                                            />
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Animatehoc(Verify);

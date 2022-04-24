import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Spinner } from "reactstrap";
import { GetMOEDetailsQuery } from "../../graphql/queries/authentication.query.js";
import Animatehoc from "../../shared/HocWappers/AnimateHoc.js";

function Verify() {
    const { query } = useRouter();
    const [qrCodeState, setQrCodeState] = useState(null);
    const { loading, error, data } = useQuery(GetMOEDetailsQuery, {
        variables: { moeId: query.payload },
    });

    useEffect(() => {
        if (data) {
            setQrCodeState(data.GetMOEDetails.qrCode);
        }
    }, [data]);

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
                                        <h4 className="text-primary">Please scan QR code</h4>
                                    </div>
                                    <div className="card-body p-0 m-0">
                                        <form className="identity-upload">
                                            <div className="identity-content">
                                                <img src={qrCodeState} width="280px" height="auto" />
                                            </div>
                                            <div className="row p-4 m-4">
                                                <div className="col-12">
                                                    <div class="input-group mb-3">
                                                        <input type="text" class="form-control" placeholder="Enter OTP" aria-label="Enter OTP" aria-describedby="basic-addon2" />
                                                        <div class="input-group-append">
                                                            <button class="btn btn-primary" style={{ height: "100%", borderRadius: "0px 5px 5px 0px"}} type="button">Verify</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

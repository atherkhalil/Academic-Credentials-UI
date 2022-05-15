import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import dynamic from 'next/dynamic';
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import LearnerCredentialDetailForMoe from "../../components/form/LearnerCredentialDetailForMoe";
import { AddCourse } from "../../graphql/mutations/issuer.mutation.js";
import { useRouter } from "next/router";
import Link from "next/link";
import { UpdateCredential } from "../../redux/actions/learner.action.js";
import SignWithKeyModal from "../../components/modal/SignWithKeyModal/SignWithKeyModal.js";
import ECDSAVerficationModal from "../../components/modal/ECDSAVerficationModal/ECDSAVerficationModal.js";
const Credentialkanban = dynamic(() => import("../../components/CredentialKanban/CredentialKanban.js"), { ssr: false });

const CourseFormSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
});

const ecdsaVerficationStateTemp = {
    issuerECDSA:
    {
        k: "559013b2dc2196e112b142be2adb426a25f003a9ae504fbee4d0b58f18547564",
        r: "888e0051ede98729682408349a2bf37657a515474838e4a5121dc7351b1dd327",
        s: "79a7c464c1e6a912eb36a4804ef6699a273e9f8c8c4378040ea28f2740aab554",
        signingDate: "Tue, 10 May 2022 12:38:45 GMT"
    },
    learnerECDSA: {
        k: "0d07ba56a96e09c468578bb67b208bd00077ae79bdf7b28ad9feb55888155dd8",
        r: "7890dc448f2c1ee1e5a428b28bfa6267798782d2ea2f2f7ec251ec7909772b31",
        s: "2221ef87015f8d561b331b3d9244ca5321a7cff0a4aa5edd462bb5d9cc0fbb76",
        signingDate: "Tue, 10 May 2022 12:38:51 GMT"
    },
    moeECDSA: {
        k: "75e6a9fd2f9f9ac07dc048427006414db7d984be523d955a70384f0aeda7511a",
        r: "0a768b73bcb6fc2be07f933b6fd2148d824b8ddd923b961f3334e7d082d7e162",
        s: "76d1e2d2b9a1a160305b5f1a07d670220755651797f864348c24831d2f7eabd6",
        signingDate: "Tue, 10 May 2022 12:38:54 GMT"
    }
};

function Credentials() {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [showKanban, setShowKanban] = useState(true);
    const credentialList = useSelector((state) => state?.Moe.credentialList);
    const [initialState, setInitialState] = useState(credentialList[0]);
    const [addCourseMutation, { data, loading, error }] = useMutation(AddCourse);
    const [showSignWithKeyModal, setShowSignWithKeyModal] = useState(false);
    const [currentDetailState, setCurrentDetailState] = useState(null);
    const [board, setBoard] = useState({
        columns: [
            {
                id: 1,
                title: 'Pending',
                cards: []
            },
            {
                id: 2,
                title: 'Approved',
                cards: []
            },
            {
                id: 3,
                title: 'REJECTED',
                cards: []
            }
        ]
    });
    const [eCDSAVerficationState, setECDSAVerficationState] = useState({
        issuer: {
            verfied: false
        },
        learner: {
            verfied: false
        },
    });
    const [showECDSAVerficationModalModal, setShowECDSAVerficationModalModal] = useState(false);

    useEffect(() => {
        if (credentialList.length > 0) {
            let tempBoard = board;
            for (let index = 0; index < credentialList.length; index++) {
                const credential = credentialList[index];
                console.log("credential: ", credential)
                if (credential.status == "Pending") {
                    tempBoard.columns[0].cards.push(credential);
                }
                if (credential.status == "Approved") {
                    tempBoard.columns[1].cards.push(credential);
                }
                if (credential.status == "REJECTED") {
                    tempBoard.columns[2].cards.push(credential);
                }
            }
            console.log(tempBoard);
            setBoard(tempBoard);
        }
    }, [credentialList]);

    const _handleVerify = () => {
        setShowSignWithKeyModal(!showSignWithKeyModal)
    }

    const _handleSignCredential = (state) => {
        enqueueSnackbar("Successfully verified!", {
            variant: "success",
        });

        setTimeout(() => {
            setShowKanban(!showKanban)
            setShowSignWithKeyModal(!showSignWithKeyModal)
        }, 500);
    }

    const _handleShowCredentialDetail = (credId) => {
        let temp = credentialList.find(cred => cred.id == credId);
        setCurrentDetailState(temp);
        setShowKanban(!showKanban)
    }

    const _handleECDSAVerification = () => {
        console.log("Verification is in progress!")
    }

    return (
        <>
            <Layout
                headTitle="Credentials"
                pageTitle="Credentials"
                pageTitleSub={"Welcome to Credentials"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Credentials"}
            >
                {
                    showKanban ?
                        <div className="container">
                            <div className="row justify-content-center">
                                <Credentialkanban
                                    board={board}
                                    setBoard={setBoard}
                                    _handleShowCredentialDetail={_handleShowCredentialDetail}
                                    enqueueSnackbar={enqueueSnackbar}
                                />
                            </div>
                        </div>
                        :
                        <CredentialDetail
                            CourseFormSchema={CourseFormSchema}
                            initialValues={currentDetailState}
                            context="edit"
                            _handleVerify={_handleVerify}
                            showSignWithKeyModal={showSignWithKeyModal}
                            setShowSignWithKeyModal={setShowSignWithKeyModal}
                            _handleSignCredential={_handleSignCredential}
                            showKanban={showKanban}
                            setShowKanban={setShowKanban}
                            ecdsaVerficationStateTemp={ecdsaVerficationStateTemp}
                            eCDSAVerficationState={eCDSAVerficationState}
                            showECDSAVerficationModalModal={showECDSAVerficationModalModal}
                            setShowECDSAVerficationModalModal={setShowECDSAVerficationModalModal}
                            _handleECDSAVerification={_handleECDSAVerification}
                        />
                }
            </Layout>
        </>
    );
}

const CredentialDetail = ({
    CourseFormSchema,
    initialValues,
    context,
    _handleVerify,
    showSignWithKeyModal,
    setShowSignWithKeyModal,
    _handleSignCredential,
    showKanban,
    setShowKanban,
    ecdsaVerficationStateTemp,
    showECDSAVerficationModalModal,
    setShowECDSAVerficationModalModal,
    _handleECDSAVerification,
    eCDSAVerficationState
}) => {
    return (
        <>
            <div className="mb-4">
                <button className="btn btn-info mb-4" onClick={() => setShowKanban(!showKanban)}>
                    <i class="ri-arrow-left-s-line"></i>
                </button>

                <div style={{ textAlign: "right" }}>
                    <button color="primary" onClick={_handleVerify} className="btn btn-primary me-10">
                        Verify
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-center align-items-center py-20">
                                <div className="col-xl-8">
                                    <LearnerCredentialDetailForMoe
                                        CourseFormSchema={CourseFormSchema}
                                        initialValues={initialValues}
                                        context="edit"
                                        _handleVerify={_handleVerify}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SignWithKeyModal
                privateKey="vRFy4g2/bRvIHpt3fbr4LA"
                toggle={showSignWithKeyModal}
                setToggle={setShowSignWithKeyModal}
                _handleSignCredential={_handleSignCredential}
                loading={false}
            />

            <ECDSAVerficationModal
                state={ecdsaVerficationStateTemp}
                toggle={showECDSAVerficationModalModal}
                setToggle={setShowECDSAVerficationModalModal}
                _handleECDSAVerification={_handleECDSAVerification}
                eCDSAVerficationState={eCDSAVerficationState}
                loading={false}
            />
        </>
    )
}

export default Credentials;

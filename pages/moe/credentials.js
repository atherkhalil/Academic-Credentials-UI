import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import dynamic from 'next/dynamic';
import * as Yup from "yup";
import { useQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import "react-circular-progressbar/dist/styles.css";
import LearnerCredentialDetailForMoe from "../../components/form/LearnerCredentialDetailForMoe";
import { AddCourse } from "../../graphql/mutations/issuer.mutation.js";
import { useRouter } from "next/router";
import Link from "next/link";
import { UpdateCredential } from "../../redux/actions/learner.action.js";
import SignWithKeyModal from "../../components/modal/SignWithKeyModal/SignWithKeyModal.js";
import { SignCredentials } from "../../graphql/mutations/general.mutation.js";
import ECDSAVerficationModal from "../../components/modal/ECDSAVerficationModal/ECDSAVerficationModal.js";
import { GetAllCredentials } from "../../graphql/queries/moe.query.js";
import { GetAllMOEDetailsQuery } from "../../graphql/queries/authentication.query.js";
import { ecdsaVerficationFromBlockchainTypes } from "../../shared/constants.js";
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
    const { query, push, back, reload } = useRouter();
    // const credentialList = useSelector((state) => state?.Moe.credentialList);
    const [credentialList, setCredentialList] = useState([]);
    const [initialState, setInitialState] = useState(credentialList[0]);
    const [addCourseMutation, { data, loading, error }] = useMutation(AddCourse);
    const [showSignWithKeyModal, setShowSignWithKeyModal] = useState(false);
    const [currentDetailState, setCurrentDetailState] = useState(null);
    const { loading: GetAllCredentialsLoading, error: GetAllCredentialsError, data: GetAllCredentialsData } = 
      useQuery(GetAllCredentials);
    const [board, setBoard] = useState({
        columns: [
            {
                id: 1,
                title: 'PENDING',
                cards: []
            },
            {
                id: 2,
                title: 'ATTESTED',
                cards: []
            },
            {
                id: 3,
                title: 'REJECTED',
                cards: []
            }
        ]
    });
    const [issuerECDSAVerficationState, setIssuerECDSAVerficationState] = useState(ecdsaVerficationFromBlockchainTypes.wait);
    const [learnerECDSAVerficationState, setLearnerECDSAVerficationState] = useState(ecdsaVerficationFromBlockchainTypes.wait);
    const [eCDSAVerficationState, setECDSAVerficationState] = useState({
        issuer: {
            verified: false
        },
        learner: {
            verified: false
        },
    });

    const [showECDSAVerficationModalModal, setShowECDSAVerficationModalModal] = useState(false);
    const [
      signCredentialsMutation,
      { signCredentialsMutationData, signCredentialsMutationLoading, signCredentialsMutationError }
    ] = useMutation(SignCredentials);
    const currentUser = useSelector((state) => state.User.currentuser);
    const { loading: GetAllMOEDetailsQueryLoading, error: GetAllMOEDetailsQueryError, data: GetAllMOEDetailsQueryData } = useQuery(GetAllMOEDetailsQuery, {
      variables: { moeId: currentUser?.user?._id },
    });
    const [moePrivateKey, setMoePrivateKey] = useState("");

    useEffect(() => {
        let tempId = "6284c44abe2badfb9b03c9b2";
        if (GetAllCredentialsData?.GetCredentials?.length > 0) {
            setCredentialList(GetAllCredentialsData?.GetCredentials);
            let tempBoard = board;
            for (let index = 0; index < GetAllCredentialsData?.GetCredentials?.length; index++) {
                const credential = GetAllCredentialsData?.GetCredentials[index];
                if (credential.id == tempId) {
                    // if (status == "Pending") {
                        tempBoard.columns[0].cards.push(credential);
                    // }
                    // if (status == "Approved") {
                    //     tempBoard.columns[1].cards.push(credential);
                    // }
                    // if (status == "REJECTED") {
                    //     tempBoard.columns[2].cards.push(credential);
                    // } 
                }
            }
            setBoard(tempBoard);
        }
    }, [GetAllCredentialsData]);

    useEffect(() => {
        console.log("GetAllMOEDetailsQueryData: ", GetAllMOEDetailsQueryData)
      if (GetAllMOEDetailsQueryData?.GetMOEDetails) {
        setMoePrivateKey(GetAllMOEDetailsQueryData?.GetMOEDetails.privateKey)
      }
    }, [GetAllMOEDetailsQueryData]);

    const _handleVerify = () => {
        setShowECDSAVerficationModalModal(!showECDSAVerficationModalModal);
        _handleECDSAVerifyFromBlockchain();
    }

    const _handleECDSAVerifyFromBlockchain = () => {
        setTimeout(() => {
            _hanldeVerifyIssuerECDSABlockchain();
       }, 2000);
    }

    const _handleAttest = () => {
        setShowECDSAVerficationModalModal(!showECDSAVerficationModalModal);
        setShowSignWithKeyModal(!showSignWithKeyModal)
    }

    const _handleShowCredentialDetail = (credId) => {
        let temp = credentialList.find(cred => cred.id == credId);
        setCurrentDetailState(temp);
        setShowKanban(!showKanban)
    }

    const _handleSignCredential = () => {
      signCredentialsMutation({
        variables: {
          credentialId: currentDetailState.id
        },
        onCompleted: () => {
          enqueueSnackbar("Credential signed successfully!", {
            variant: "success",
          });
          setTimeout(() => {
            reload();
          }, 500);
        },
        onError: (errors) => {
          console.log("errors: ", errors.message);
          enqueueSnackbar(errors.message, {
            variant: "error",
          });
        },
      });
    }

    const _hanldeVerifyIssuerECDSABlockchain = () => {
        setIssuerECDSAVerficationState(ecdsaVerficationFromBlockchainTypes.loading)
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "credentialId": currentDetailState.id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BLOCKCHAIN}/credentials/verifyIssuerECDSA`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.success) {
                setIssuerECDSAVerficationState(ecdsaVerficationFromBlockchainTypes.success)
            } else {
                setIssuerECDSAVerficationState(ecdsaVerficationFromBlockchainTypes.error)
            }

            setTimeout(() => {
                _hanldeVerifyLearnerECDSABlockchain();
            }, 2000);
        })
        .catch(error => console.log('error', error));
    }

    const _hanldeVerifyLearnerECDSABlockchain = () => {
        setLearnerECDSAVerficationState(ecdsaVerficationFromBlockchainTypes.loading)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "credentialId": currentDetailState.id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BLOCKCHAIN}/credentials/verifyLearnerECDSA`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.success) {
                setLearnerECDSAVerficationState(ecdsaVerficationFromBlockchainTypes.success)
            } else {
                setLearnerECDSAVerficationState(ecdsaVerficationFromBlockchainTypes.error)
            }
        })
        .catch(error => console.log('error', error));
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
                            issuerECDSAVerficationState={issuerECDSAVerficationState}
                            learnerECDSAVerficationState={learnerECDSAVerficationState}
                            showECDSAVerficationModalModal={showECDSAVerficationModalModal}
                            setShowECDSAVerficationModalModal={setShowECDSAVerficationModalModal}
                            _handleAttest={_handleAttest}
                            moePrivateKey={moePrivateKey}
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
    issuerECDSAVerficationState,
    learnerECDSAVerficationState,
    _handleAttest,
    moePrivateKey
}) => {

    const _handleShowVerifyButton = (state) => {
      if (
        state?.credentialTrackingStatus?.moeSign?.status == "SIGNED"
      ) {
        return true;
      } else {
        return false;
      }
    }

    return (
        <>
            <div className="mb-4">
                <button className="btn btn-info mb-4" onClick={() => setShowKanban(!showKanban)}>
                    <i class="ri-arrow-left-s-line"></i>
                </button>

                {
                    !_handleShowVerifyButton(initialValues) && (
                        <div style={{ textAlign: "right" }}>
                            <button color="primary" onClick={_handleVerify} className="btn btn-primary me-10">
                                Verify
                            </button>
                        </div>
                    )
                }
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
                privateKey={moePrivateKey}
                toggle={showSignWithKeyModal}
                setToggle={setShowSignWithKeyModal}
                _handleSignCredential={_handleSignCredential}
                loading={false}
            />

            <ECDSAVerficationModal
                state={ecdsaVerficationStateTemp}
                toggle={showECDSAVerficationModalModal}
                setToggle={setShowECDSAVerficationModalModal}
                issuerECDSAVerficationState={issuerECDSAVerficationState}
                learnerECDSAVerficationState={learnerECDSAVerficationState}
                loading={false}
                _handleAttest={_handleAttest}
            />
        </>
    )
}

export default Credentials;

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
const Credentialkanban = dynamic(() => import("../../components/CredentialKanban/CredentialKanban.js"), { ssr: false });

const CourseFormSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
});

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
    setShowKanban
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
                toggle={showSignWithKeyModal}
                setToggle={setShowSignWithKeyModal}
                _handleSignCredential={_handleSignCredential}
                loading={false}
            />
        </>
    )
}

export default Credentials;

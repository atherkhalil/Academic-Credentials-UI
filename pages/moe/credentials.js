import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import dynamic from 'next/dynamic';
const Credentialkanban = dynamic(() => import("../../components/CredentialKanban/CredentialKanban.js"), { ssr: false });

function Credentials() {
    const [board, setBoard] = useState({
        columns: [
            {
                id: 1,
                title: 'Pending',
                cards: [
                    {
                        id: "TsLiK6hij61QLxY07zDKzQ",
                        type: "ACADEMIC",
                        title: "Bachelors of Electrical Engineering",
                        description: "Description",
                        issuer: {
                            name: "Mr. Bob"
                        },
                        issuance_date: new Date(),
                        student: {
                            name: "Alex Daniel"
                        },
                        proof: "",
                        Board: "Board"
                    }
                ]
            },
            {
                id: 2,
                title: 'Approved',
                cards: [
                    {
                        id: "VRpskqk4hmtKvDveMbQ33d",
                        type: "ACADEMIC",
                        title: "Bachelors of Computer Engineering",
                        description: "Description",
                        issuer: {
                            name: "Mrs. Alice"
                        },
                        issuance_date: new Date(),
                        student: {
                            name: "Emma Watson"
                        },
                        proof: "",
                        Board: "Board"
                    }
                ]
            },
            {
                id: 3,
                title: 'REJECTED',
                cards: [
                    {
                        id: "CO51dG2W7JBNvKJklwLQ33",
                        type: "ACADEMIC",
                        title: "Bachelors of Computer Science",
                        description: "Description",
                        issuer: {
                            name: "Mrs. Alice"
                        },
                        issuance_date: new Date(),
                        student: {
                            name: "David Johnson"
                        },
                        proof: "",
                        Board: "Board"
                    }
                ]
            }
        ]
    });

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
                 <Credentialkanban board={board} setBoard={setBoard} />
            </Layout>
        </>
    );
}
export default Credentials;

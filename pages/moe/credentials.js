import React, { useEffect } from "react";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import ProfileWidget from '../../components/elements/ProfileWidget';
import TopPerfomingWidget from "../../components/elements/TopPerformingWidget";
// import Credentialkanban from "../../components/CredentialKanban/CredentialKanban.js";
import dynamic from 'next/dynamic';

const Credentialkanban = dynamic(() => import("../../components/CredentialKanban/CredentialKanban.js"), { ssr: false });

function Credentials() {
    const board = {
        columns: [
            {
                id: 1,
                title: 'Backlog',
                cards: [
                    {
                        id: 1,
                        title: 'Add card',
                        description: 'Add capability to add a card in a column'
                    },
                ]
            },
            {
                id: 2,
                title: 'Doing',
                cards: [
                    {
                        id: 2,
                        title: 'Drag-n-drop support',
                        description: 'Move a card between the columns'
                    },
                ]
            }
        ]
    };

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
                 <Credentialkanban board={board} />
            </Layout>
        </>
    );
}
export default Credentials;

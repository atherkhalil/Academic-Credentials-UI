import React, { useEffect } from 'react';
import Link from "next/link";
import EmptyData from "../general/EmptyData.js";
import Switch from "react-switch";
import moment from "moment";
import { truncateString } from "../../shared/helper.js";
import { downloadCredentialPdf } from "../../services/files.service.js";

const Card = ({ content, dragging, allowRemoveCard, onCardRemove, openDrawer, _handleShowCredentialDetail }) => {
    return (
        <div className="card credential-kanban-card">
            <div className="card-body courses-details">
                <p><b className="text-primary">Credential Id:</b> {content.id}</p>
                <h5>{content.title}</h5>
                <div className="courses-details-info d-flex justify-content-left">
                    <div className="courses-details-info-box">
                        <i class="ri-government-line"></i>
                        <span>{content.type}</span>
                    </div>
                    <div className="courses-details-info-box">
                        <i class="ri-timer-2-line"></i>
                        <span>{moment(content.issuance_date).format("MMMM Do YYYY")}</span>
                    </div>
                </div>
                <div className="courses-details-info d-flex justify-content-left">
                    <div className="courses-details-info-box">
                        <i class="ri-government-line"></i>
                        <span>{content?.issuer?.name}</span>
                    </div>
                    <div className="courses-details-info-box">
                        <i class="ri-shield-user-line"></i>
                        <span>{`${content?.learner?.firstName} ${content?.learner?.lastName}`}</span>
                    </div>
                </div>
                <p className="truncate">{truncateString(content.description, 50)}</p>
                <span className="text-success">{content.Board}</span>

                {content.verified ? <span className="text-primary">Verified</span> : <span className="text-danger">Unverified</span>}
                <div className="courses-action d-flex flex-row justify-content-between">
                    <div>
                        <button className="btn btn-primary" onClick={() => _handleShowCredentialDetail(content.id)}>Details</button>
                    </div>
                    <div>
                        <i onClick={() => downloadCredentialPdf(process.env.NEXT_PUBLIC_CREDENTIAL_URL + content.credentialUrl)} class="ri-file-download-fill ri-xl cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
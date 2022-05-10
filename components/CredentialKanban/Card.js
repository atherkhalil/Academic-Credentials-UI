import React, { useEffect } from 'react';
import Link from "next/link";
import EmptyData from "../general/EmptyData.js";
import Switch from "react-switch";
import moment from "moment";
import { truncateString } from "../../shared/helper.js";

const Card = ({ content, dragging, allowRemoveCard, onCardRemove, openDrawer }) => {
    return (
        <div className="card credential-kanban-card">
            <div className="card-body courses-details">
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
                        <i class="ri-shield-user-line"></i>
                        <span>{content?.issuer?.name}</span>
                    </div>
                    <div className="courses-details-info-box">
                        <i class="ri-shield-user-line"></i>
                        <span>{content?.student?.name}</span>
                    </div>
                </div>
                <p className="truncate">{truncateString(content.description, 50)}</p>
                <span className="text-primary">{content.Board}</span>
                {/* <span className="text-warning">Inactive</span> */}
                <div className="courses-action d-flex flex-row justify-content-between">
                    <div>
                        <Link href={"courses/" + content.id}>
                            <a className="btn btn-primary text-white">Details</a>
                        </Link>
                    </div>
                    {/* <div>
                        <Switch
                            onChange={() =>
                                _handleCourseStatusUpdate(content.id, content.active, index)
                            }
                            checked={content.active}
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Card;
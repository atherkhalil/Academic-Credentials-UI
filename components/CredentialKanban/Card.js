import React, { useEffect } from 'react';
import Link from "next/link";
import EmptyData from "../general/EmptyData.js";
import Switch from "react-switch";
import moment from "moment";
import './card.module.css';

const Card = ({ content, dragging, allowRemoveCard, onCardRemove, openDrawer }) => {
    console.log("content: ", content)
    return (
        <div className="card course-card">
            <div className="card-body courses-details">
                <h5>Bachelors of Computer Engineering</h5>
                <div className="courses-details-info d-flex justify-content-left">
                    <div className="courses-details-info-box">
                        <i class="ri-calendar-check-fill"></i>
                        <span>Session: 4 Years</span>
                    </div>
                    <div className="courses-details-info-box">
                        <i class="ri-timer-2-line"></i>
                        <span>Credit Hours: 140</span>
                    </div>
                    <div className="courses-details-info-box">
                        <i class="ri-grid-fill"></i>
                        <span>Code: BSCS</span>
                    </div>
                </div>
                <p>This is 4 Years degree in Bachelors of Computer Engineering</p>
                <span className="text-primary">Active</span>
                {/* <span className="text-warning">Inactive</span> */}
                <div className="courses-action d-flex flex-row justify-content-between">
                    <div>
                        <Link href={"courses/" + content.id}>
                            <a className="btn btn-primary text-white">Details</a>
                        </Link>
                        <Link href={"courses/credentials/" + content.id}>
                            <button className="btn btn-light text-dark">
                                View Credentials
                            </button>
                        </Link>
                    </div>
                    <div>
                        <Switch
                            onChange={() =>
                                _handleCourseStatusUpdate(content.id, content.active, index)
                            }
                            checked={content.active}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
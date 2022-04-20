import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import Input from "../Input/Input";
import messagesData from "../messages.json";
import Link from "next/link";
import Avatar from "react-avatar";
export default function Message({
    userActive,
    messagesEndRef,
    scrollToBottom,
}) {
    const [messages, setMessages] = useState(messagesData);
    function addMessages(value) {
        const newMessages = {
            userId: userActive.id,
            type: "text",
            sender: "admin",
            value,
        };
        setMessages([...messages, newMessages]);
        scrollToBottom();
    }

    return (
        <div className="conver__box">
            <div className="conver__header d-flex justify-content-between align-items-center">
            <span><Avatar  className="me-10" name={userActive.name} size="30" textSizeRatio={1.75} round={true} /> {userActive.name}</span>
            <div>
            <Link href="/message-video"><a className="me-15 fs-20"><i className="ri-vidicon-fill active"></i></a></Link>
            <Link href="/message-video"><a className="me-15 fs-20"><i className="ri-phone-fill"></i></a></Link>
            <Link href="/message-video"><a className="me-15 fs-20"><i className="ri-user-fill"></i></a></Link>
            </div>
            </div>
            <div className="conver__main">
                <PerfectScrollbar>
                    {messages.map((data, index) => {
                        if (userActive.id === data.userId) {
                            return (
                                <div
                                    key={index}
                                    className={`conver__item ${data.sender}`}
                                >
                                    <div className="conver__list">
                                        {data.value}
                                    </div>
                                    <div ref={messagesEndRef} />
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </PerfectScrollbar>
            </div>

            <Input addMessages={addMessages} userActive={userActive} />
        </div>
    );
}

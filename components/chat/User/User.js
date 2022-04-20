import React from "react";
import Avatar from "react-avatar";
import PerfectScrollbar from "react-perfect-scrollbar";


export default function User({ users, userSelected, userActive }) {
    const classNameUser = (data) =>
        "user__item" +
        (userActive.id === data.id ? " active" : "") +
        (data.unread ? " unread" : "");

    return (
        <div className="user__box">
            <PerfectScrollbar>
                {users.map((data, index) => {
                    return (
                        <div
                            key={index}
                            className={classNameUser(data)}
                            onClick={() => userSelected(data)}
                        >
                            <Avatar  className="me-10" name={data.name} size="30" round={true} textSizeRatio={1.75} /> {data.name}
                        </div>
                    );
                })}
            </PerfectScrollbar>
        </div>
    );
}

import Link from "next/link";

function DropdownProfile({ _handleLogout }) {
    const notificationList = [
        {
            icon: "ri-user-line",
            text: "Profile",
            path: "profile",
            type: "link"
        },
        {
            icon: "ri-settings-3-line",
            text: "Settings",
            path: "settings-profile",
            type: "link"
        },
        {
            icon: "ri-time-line",
            text: "Activity",
            path: "settings-activity",
            type: "link"
        },
        {
            icon: "ri-lock-line",
            text: "Lock",
            path: "lock",
            type: "link"
        },
        {
            icon: "ri-logout-circle-line",
            text: "Logout",
            path: "",
            color: "text-danger",
            type: "button",
            handler: _handleLogout
        },
    ];

    return (
        <>
            {notificationList.map((item, id) => (
                <>
                {
                    item.type == "button" ? 
                        <a
                            className={`dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top  ${item.color}`}
                            onClick={item.handler}
                        >
                            <span className="fs-18 text-primary me-10">
                                <i className={item.icon}></i>
                            </span>
                            {item.text}
                        </a>
                    : 
                    <Link href={`/${item.path}`} key={id}>
                        <a
                            className={`dropdown-item ps-20 pe-20 pt-10 pb-10 d-flex align-items-center border-top  ${item.color}`}
                        >
                            <span className="fs-18 text-primary me-10">
                                <i className={item.icon}></i>
                            </span>
                            {item.text}
                        </a>
                    </Link>
                }
                </>
            ))}
        </>
    );
}
export default DropdownProfile;

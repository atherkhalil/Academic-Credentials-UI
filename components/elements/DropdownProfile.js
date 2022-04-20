import Link from "next/link";
function DropdownProfile() {
    const notificationList = [
        {
            icon: "ri-user-line",
            text: "Profile",
            path: "profile",
        },
        {
            icon: "ri-settings-3-line",
            text: "Settings",
            path: "settings-profile",
        },
        {
            icon: "ri-time-line",
            text: "Activity",
            path: "settings-activity",
        },
        {
            icon: "ri-lock-line",
            text: "Lock",
            path: "lock",
        },
        {
            icon: "ri-logout-circle-line",
            text: "Logout",
            path: "signin",
            color: "text-danger",
        },
    ];

    return (
        <>
            {notificationList.map((item, id) => (
                <>
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
                </>
            ))}
        </>
    );
}
export default DropdownProfile;

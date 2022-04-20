import Link from "next/link";

function DropdownNotification() {
    const profileList = [
        {
            icon: "ri-check-line",
            text: "Device confirmation completed",
            date: "020-11-04",
            time: "12:00:23",
            status: "bg-success-lighten text-success",
        },
        {
            icon: "ri-close-line",
            text: "2FA verification failed",
            date: "020-11-04",
            time: "12:00:23",
            status: "bg-danger-lighten text-danger",
        },
        {
            icon: "ri-question-mark",
            text: "Phone verification pending",
            date: "020-11-04",
            time: "12:00:23",
            status: "bg-warning-lighten text-warning",
        },
        {
            icon: "ri-question-mark",
            text: "Phone verification pending",
            date: "020-11-04",
            time: "12:00:23",
            status: "bg-warning-lighten text-warning",
        },
    ];

    return (
        <>
            {profileList.map((item, index) => (
                <>
                    <Link href="#" key={index}>
                        <a className="d-block pt-10 pb-10 border-bottom">
                            <div className="d-flex align-items-center">
                                <span className={`me-16 icon  ${item.status}`}>
                                    <i className={item.icon}></i>
                                </span>
                                <div>
                                    <h6 className="mb-0 fs-14">{item.text}</h6>
                                    <span className="fs-13 text-muted">
                                        {item.date} {item.time}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </Link>
                </>
            ))}
        </>
    );
}
export default DropdownNotification;

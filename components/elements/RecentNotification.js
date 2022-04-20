import Link from "next/link";
import PerfectScrollbar from "react-perfect-scrollbar";

function RecentNotification() {
    const recentNotificationList = [
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
            icon: "ri-close-line",
            text: "Dadeline over to launch the new course",
            date: "020-11-04",
            time: "12:00:23",
            status: "bg-danger-lighten text-danger",
        },
        {
            icon: "ri-check-line",
            text: "Device confirmation completed",
            date: "020-11-04",
            time: "12:00:23",
            status: "bg-success-lighten text-success",
        },
        {
            icon: "ri-question-mark",
            text: "New user verification is pending",
            date: "020-11-04",
            time: "12:00:23",
            status: "bg-warning-lighten text-warning",
        },
    ];

    return (
        <>
            <PerfectScrollbar>
                {recentNotificationList.map((item, id) => (
                    <>
                        <Link href="#" key={id}>
                            <a>
                                <div className="d-flex align-items-center justify-content-start  pt-10 pb-10 border-bottom">
                                    <span
                                        className={`me-16 icon  ${item.status}`}
                                    >
                                        <i className={item.icon}></i>
                                    </span>
                                    <div className="flex-grow-1 flex-fill">
                                        <h6 className="mb-5 fs-14">
                                            {item.text}
                                        </h6>
                                        <span className="fs-13 text-muted">
                                            {item.date} {item.time}
                                        </span>
                                    </div>
                                    <div className="duration">3 min ago</div>
                                </div>
                            </a>
                        </Link>
                    </>
                ))}
            </PerfectScrollbar>
        </>
    );
}
export default RecentNotification;



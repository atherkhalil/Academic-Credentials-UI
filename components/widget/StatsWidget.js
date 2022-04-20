import { Progress } from "reactstrap";

function StatsWidget() {
    const statsWidgetItem = [
        {
            icon: "ri-team-line",
            title: "Total Students",
            amount: 5220,
            color: "text-primary bg-primary-lighten",
            progress: "primary",
            free: "4240 students ",
            paid: "980 Students",
            value: 75,
            colorWidget:"color-widget"
        },
        {
            icon: "ri-add-circle-line",
            title: "New Students",
            amount: 1032,
            color: "text-warning bg-warning-lighten",
            progress: "warning",
            free: "909 students",
            paid: "123 students",
            value: 80,
        },
        {
            icon: "ri-stack-line",
            title: "Total Courses",
            amount: 109,
            color: "text-danger bg-danger-lighten",
            progress: "danger",
            free: "83 courses",
            paid: "26 courses",
            value: 65,
        },
        // {
        //     icon: "ri-coins-line",
        //     title: "Total Earnings",
        //     amount: 236,
        //     color: "text-info bg-info-lighten",
        //     progress: "info"
        // },
    ];

    return (
        <>
            {statsWidgetItem.map((item, id) => (
                <>
                    <div className="col-lg-4 col-sm-12">
                        <div className={`${item.colorWidget} stat-widget p-20 mb-160 mb-30`}>
                            <div className="d-flex align-items-center mb-20">
                                <span className="icon">
                                    <i
                                        className={`${item.icon} ${item.color} fs-30 py-12 px-12 rounded me-20`}
                                    ></i>
                                </span>
                                <div>
                                    <p className="mb-0"><strong>{item.title}</strong></p>
                                    <h3 className="mb-0">{item.amount}</h3>
                                </div>
                            </div>
                            {/* <h2 className="mb-0">{item.amount}</h2> */}
                            <p className="mb-7">
                                <strong>Free: {item.free}</strong>
                                </p>
                            <p><strong>Paid: {item.paid}</strong></p>
                            <Progress
                                color={item.progress}
                                value={item.value}
                            />
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}
export default StatsWidget;

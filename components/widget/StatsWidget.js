import { Progress } from "reactstrap";

function StatsWidget() {
    const statsWidgetItem = [
        {
            icon: "ri-team-line",
            title: "Total Institutes",
            amount: 5220,
            color: "text-primary bg-primary-lighten",
            progress: "primary",
            value: 75,
            colorWidget:"color-widget"
        },
        {
            icon: "ri-add-circle-line",
            title: "New Institutes",
            amount: 1032,
            color: "text-warning bg-warning-lighten",
            progress: "warning",
            value: 80,
        },
        {
            icon: "ri-stack-line",
            title: "Total Credentials",
            amount: 109,
            color: "text-danger bg-danger-lighten",
            progress: "danger",
            value: 65,
        }
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

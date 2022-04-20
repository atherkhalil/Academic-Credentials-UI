import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function TopPerformingWidget() {
    const topPerfomingWidgetItem = [
        {
            imgId: "18",
            title: "The Advanced Web Developer Bootcamp",
            category: "Development",
            students: 5235,
            percentage: 90,
        },
        {
            imgId: "16",
            title: "Modern Javascript from The Begining",
            category: "Development",
            students: 3245,
            percentage: 80,
        },
        {
            imgId: "15",
            title: "The Web Developer Bootcamp 2021",
            category: "Development",
            students: 2435,
            percentage: 95,
        },
        {
            imgId: "11",
            title: "Real Life Data Science Exercises Included",
            category: "Development",
            students: 1395,
            percentage: 75,
        },
    ];

    // const percentage = 66;

    return (
        <>
            {topPerfomingWidgetItem.map((item, id) => (
                <>
                    <div className="col-lg-6 col-xl-12" key={id}>
                        <div className="bg-white py-12 px-12 rounded d-flex mb-20 justify-content-between align-items-center align-items-center shadow-sm">
                            <img
                                src={`/images/courses/${item.imgId}.jpg`}
                                width="85"
                                alt=""
                                className="rounded me-15"
                            />
                            <div className="flex-grow-1">
                                <h5 className="mb-5 fs-16">{item.title}</h5>
                                <p className="mb-0 fs-14">{item.category}</p>
                            </div>
                            <div className="performance-progress">
                                <CircularProgressbar
                                    value={item.percentage}
                                    text={`${item.percentage}%`}
                                // styles={buildStyles({
                                //     textColor: "red",
                                //     pathColor: "bg-primary",
                                //     trailColor: "gold"
                                //   })}
                                />
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}
export default TopPerformingWidget;

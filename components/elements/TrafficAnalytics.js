import TrafficChart from '../chart/TrafficChart';
function TrafficAnalytics() {
    const TrafficAnalyticsItem = [
        {
            imgId: "10",
            name: "Amazon Web Services Certification",
            desc: "AWS Certification Course",
            traffic: "2.56K",
            source: "facebook",
            referral: "28.19%"
        },
        {
            imgId: "11",
            name: "Python Bootcamp from Zero to Hero",
            desc: "Basic Python course",
            traffic: "1.56K",
            source: "twitter",
            referral: "18.91%"
        },
        {
            imgId: "12",
            name: "The Web Developer Bootcamp 2021",
            desc: "Advanced web developing course",
            traffic: "2.17K",
            source: "facebook",
            referral: "21.63%"
        },
        {
            imgId: "13",
            name: "Data Science Exercises Included.",
            desc: "Latest technology of data storage",
            traffic: "0.89K",
            source: "linkedin",
            referral: "15.79%"
        },
        {
            imgId: "14",
            name: "Machine Learning Bootcamp",
            desc: "Deploying course of trend technology",
            traffic: "3.19K",
            source: "youtube",
            referral: "38.79%"
        },
    ];
    return (
        <>
            {TrafficAnalyticsItem.map((item, id) => (
                <div className="rtable-row" key={id}>
                    <div className="rtable-cell topic-cell">
                        <div className="rtable-cell--content title-content d-flex align-items-center">
                            <img
                                className="topic-cell-img "
                                src={`/images/courses/${item.imgId}.jpg`}
                                width="95"
                                alt=""
                            />
                            <div className="topic-cell-span">
                                <h5>
                                    {item.name}
                                </h5>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="rtable-cell traffic-cell">
                        <div className="rtable-cell--heading">Traffic</div>
                        <div className="rtable-cell--content date-content">
                            {item.traffic}
                        </div>
                    </div>
                    <div className="rtable-cell source-cell">
                        <div className="rtable-cell--heading">Source</div>
                        <div className="rtable-cell--content access-link-content d-flex align-items-center">
                            {item.source}
                        </div>
                    </div>
                    <div className="rtable-cell referrals-cell">
                        <div className="rtable-cell--heading">Referrals</div>
                        <div className="rtable-cell--content replay-link-content">
                            {item.referral}
                        </div>
                    </div>
                    <div className="rtable-cell trend-cell">
                        <div className="rtable-cell--heading">Trend</div>
                        <div className="rtable-cell--content replay-link-content">
                            <TrafficChart/>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
export default TrafficAnalytics;

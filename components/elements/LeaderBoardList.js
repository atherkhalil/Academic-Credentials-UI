function LeaderBoardList() {
    const LeaderBoardListItem = [
        {
            imgId: "bootstrap",
            name: "Bootstrap Camp",
            category: "Growing designing concept",
            ranking: 3.89,
            impression: 1096,
            sales: 1685,
            earning: 31400,
        },
        {
            imgId: "html5",
            name: "Advanced Course of HTML5",
            category: "Real use in real project",
            ranking: 4.16,
            impression: 1156,
            sales: 3912,
            earning: 1965,
        },
        {
            imgId: "jquery",
            name: "Project Development using JQuery",
            category: "Implementation of JQuery",
            ranking: 4.89,
            impression: 12369,
            sales: 5733,
            earning: 4857,
        },
        {
            imgId: "laravel",
            name: "Basic Learning of Laravel",
            category: "Start up with Laravel",
            ranking: 4.18,
            impression: 12369,
            sales: 1800,
            earning: 35280,
        },
        {
            imgId: "vue",
            name: "Premium program of Vue",
            category: "Advanced course",
            ranking: 4.32,
            impression: 12369,
            sales: 985,
            earning: 35280,
        },
        {
            imgId: "sass",
            name: "Project with SASS",
            category: "sass instead of css",
            ranking: 4.06,
            impression: 12369,
            sales: 590,
            earning: 35280,
        },
        {
            imgId: "bootstrap",
            name: "Bootstrap Development",
            category: "Design",
            ranking: 4.98,
            impression: 12369,
            sales: 2133,
            earning: 35280,
        },
        {
            imgId: "bootstrap",
            name: "Bootstrap Development",
            category: "Design",
            ranking: 4.62,
            impression: 21563,
            sales: 1642,
            earning: 35280,
        },
    ];

    return (
        <>
            {LeaderBoardListItem.map((item, id) => (
                <>
                    <div className="rtable-row" key={id}>
                        <div className="rtable-cell topic-cell">
                            <div className="rtable-cell--content title-content d-flex align-items-center">
                                <img
                                    className="topic-cell-img"
                                    src={`/images/courses/${item.imgId}.png`}
                                    alt=""
                                    width="50"
                                />
                                <span className="topic-cell-span">
                                    {item.name}
                                </span>
                            </div>
                        </div>
                        <div className="rtable-cell category-cell">
                            <div className="rtable-cell--heading">Category</div>
                            <div className="rtable-cell--content date-content">
                                {item.category}
                            </div>
                        </div>
                        <div className="rtable-cell ranking-cell">
                            <div className="rtable-cell--heading">Ranking</div>
                            <div className="rtable-cell--content access-link-content d-flex align-items-center">
                            <span><i className="ri-star-s-line fs-16 me-5 text-warning"></i></span>{item.ranking}
                            </div>
                        </div>
                        <div className="rtable-cell impression-cell">
                            <div className="rtable-cell--heading">Impression</div>
                            <div className="rtable-cell--content replay-link-content">
                                {item.impression}
                            </div>
                        </div>
                        <div className="rtable-cell rtable-cell--foot sales-cell">
                            <div className="rtable-cell--heading">Sales</div>
                            <div className="rtable-cell--content earning-content">
                                {item.sales}
                            </div>
                        </div>
                        <div className="rtable-cell rtable-cell--foot earning-cell">
                            <div className="rtable-cell--heading">Earning</div>
                            <div className="rtable-cell--content earning-content">
                                ${item.earning}
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}
export default LeaderBoardList;

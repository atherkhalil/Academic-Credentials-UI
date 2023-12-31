import { Line } from "react-chartjs-2";

function AnalyticChart({ analyticChart }) {
    const data = {
        labels: [
            "4 Jan",
            "5 Jan",
            "6 Jan",
            "7 Jan",
            "8 Jan",
            "9 Jan",
            "10 Jan",
            // "11 Jan",
            // "12 Jan",
            // "13 Jan",
            // "14 Jan",
            // "15 Jan",
        ],
        datasets: [
            {
                label: "Visit",
                backgroundColor: "transparent",
                borderColor: "rgba(79, 12, 164,1)",
                // data: analyticChart.facebook,
                data: [40, 105, 92, 155, 138, 205, 120],
                borderWidth: 2,
            },
            {
                label: "Sales",
                backgroundColor: "transparent",
                borderColor: "rgba(241, 65, 108, 1)",
                // data: analyticChart.youtube,
                data: [65, 59, 80, 81, 56, 55, 40],
                borderWidth: 2,
                borderRadius: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        elements: {
            point:{
                radius: 0
            }
        },
        scales: {
            xAxes: [
                {
                    stacked: true,
                    barPercentage: 0.45,
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        // fontColor: "#8a909d",
                    },
                },
            ],
            yAxes: [
                {
                    stacked: true,
                    gridLines: {
                        display: false,
                        color: "#eee",
                    },
                    ticks: {
                        stepSize: 50,
                        // fontColor: "#8a909d",
                    },
                },
            ],
        },
        tooltips: {
            mode: "index",
            intersect: false,
            titleFontColor: "#888",
            bodyFontColor: "#555",
            titleFontSize: 12,
            bodyFontSize: 15,
            backgroundColor: "rgba(256,256,256,0.95)",
            displayColors: true,
            xPadding: 10,
            yPadding: 7,
            borderColor: "rgba(220, 220, 220, 0.9)",
            borderWidth: 2,
            caretSize: 6,
            caretPadding: 5,
        },
    };
    return (
        <>
            <Line
                data={data}
                // height={150}
                options={options}
                id="analyticChart"
            />
        </>
    );
}
export default AnalyticChart;

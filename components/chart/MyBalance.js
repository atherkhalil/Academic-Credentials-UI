import { Bar } from "react-chartjs-2";

function MyBalance({ myBalance }) {
    const data = {
        labels: [
            "4 Jan",
            "5 Jan",
            "6 Jan",
            "7 Jan",
            "8 Jan",
            "9 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
            "13 Jan",
            "14 Jan",
            "15 Jan",
        ],
        datasets: [
            {
                label: "Visit",
                backgroundColor: "rgba(32, 212, 137, 1)",
                borderColor: "transparent",
                data: myBalance.facebook,
                borderWidth: 2,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            },
            {
                label: "Sales",
                backgroundColor: "rgba(32, 212, 137, 0.25)",
                borderColor: "transparent",
                data: myBalance.youtube,
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false,
        },
        scales: {
            xAxes: [
                {
                    stacked: false,
                    barPercentage: 0.8,
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
                    stacked: false,
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
            <Bar data={data} height={150} options={options} id="my-balance" />
        </>
    );
}
export default MyBalance;

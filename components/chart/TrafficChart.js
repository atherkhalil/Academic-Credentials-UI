import { Line } from "react-chartjs-2";

function TrafficChart({ trafficData }) {
    const data = {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"],
        datasets: [
            {
                label: "# of Votes",
                data: [120, 10, 150, 100, 50, 30, 120, 30, 120, 100, 50, 30, 120, 10, 120, 100],
                fill: false,
                borderColor: "rgba(32, 212, 137, 1)",
                borderWidth: 2,
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
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                    display: false,
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                        color: "#eee",
                    },
                    ticks: {
                        beginAtZero: true,
                    },
                    display: false,
                },
            ],
        },
    };

    return (
        <>
            <Line data={data} height={80} options={options} id="trafficData" />
        </>
    );
}
export default TrafficChart;

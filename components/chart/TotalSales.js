import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ totalSales }) {
    const data = {
        datasets: [
            {
                data: totalSales.data,
                backgroundColor: [
                    "rgba(32, 212, 137,1)",
                    "rgba(255, 199, 0,1)",
                    "rgba(0, 163, 255,1)",
                ],
            },
        ],
        labels: ["Direct", "Affiliate", "Referral",],
    };

    const options = {
        responsive: true,
        cutoutPercentage: 80,
        maintainAspectRatio: false,
        animation: {
            animateRotate: true,
            animateScale: true,
        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                usePointStyle: true,
                // fontFamily: "Segoe UI",
                fontSize: 12,
                fontColor: "#464a53",
                padding: 20,
            },
        },
    };
    return (
        <>
            <Doughnut
                data={data}
                height={150}
                options={options}
                id="total-sales"
            />
        </>
    );
}
export default DoughnutChart;

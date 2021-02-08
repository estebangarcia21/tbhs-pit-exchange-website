import Chart from "chart.js"
import { useEffect, useRef } from "react"

const NetValueChart = () => {
    const chartRef = useRef(null)

    useEffect(() => {
        new Chart(chartRef.current.getContext("2d"), {
            type: "line",
            data: {
                labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ],
                datasets: [
                    {
                        label: "Net Worth Over Time",
                        data: [12, 19, 3, 5, 2, 3, 12],
                        backgroundColor: ["rgba(255, 99, 132, 0)"],
                        borderColor: [
                            "rgba(255, 99, 132, 1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)",
                            "rgba(255, 159, 64, 1)",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                animation: {
                    duration: 750,
                    easing: "easeOutCubic",
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        })
    })

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    )
}

export const useDashboardCharts = () => ({ NetValueChart })

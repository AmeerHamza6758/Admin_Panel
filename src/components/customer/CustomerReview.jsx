import React from 'react';
import './CustomerReview.css';
import Chart from 'react-apexcharts';

const CustomerReview = () => {
    const data = {
        series: [{
            name: "Review",
            data: [10, 50, 60, 30, 80, 50],
        }],
        options: {
            chart: {
                type: "area",
                height: "auto"
            },
            fill: {
                colors: ["#696969"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth",
                colors: ["#FFFFFF"],
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm"
                }
            },
            grid: { show: true },

            xaxis: {
                type: 'datetime',
                categories: [
                    "2023-11-19T00:00:00.000Z",
                    "2022-10-19T01:30:00.000Z"
                ],
            },
            yaxis: {
                shown: false
            },
            toolbar: {
                show: false
            }
        },
    };

    return (
        <div className='CustomerReview'>
            <Chart series={data.series} options={data.options} type='area' />
        </div>
    );
};

export default CustomerReview;

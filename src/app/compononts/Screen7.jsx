"use client";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [12345, 6789, 987, 98, 75, 890, 874],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [12345, 689, 987, 98, 75, 890, 874],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function Screen7() {
  return (
    <div className="flex bg-white min-h-[600px] items-center md:flex-row flex-col md:p-20 p-5">
      <div className="md:w-[50%] w-[100%]  text-left text-sky-900 md:mb-0 mb-7">
        <h3 className="text-[30px] font-semibold mb-5">
          Sustainable Infrastructure Initiative
        </h3>
        <h6>
          Infographics aim to present information in a visually appealing way.
          For an infographic to be compelling, it should have a fascinating
          topic. A creative title and eye-opening statistics should also support
          it. For credibility, ensure your infographic has a reference.
        </h6>
      </div>
      <div className="md:w-[50%] w-[100%]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
export default Screen7;

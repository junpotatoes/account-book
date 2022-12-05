import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

function PieChart2({ chartData3 }) {
  return <Pie data={chartData3} />;
}

export default PieChart2;

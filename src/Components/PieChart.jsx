import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

function PieChart({ chartData2 }) {
  return <Pie data={chartData2} />;
}

export default PieChart;

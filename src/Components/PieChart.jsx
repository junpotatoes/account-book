import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";
import zIndex from "@mui/material/styles/zIndex";
import { useState } from "react";
import { useEffect } from "react";

function PieChart({ chartData2, userData2 }) {
  console.log(userData2);

  return (
    <div className="chart__box">
      <Pie data={chartData2} />
      <div className="chart__content">
        <div>
          {userData2.labels?.map((el, idx) => {
            return (
              <div className="title__content" key={idx}>
                {el}
              </div>
            );
          })}
        </div>
        <div>
          {userData2.datasets[0].data?.map((el, idx) => {
            return (
              <div className="price__content" key={idx}>
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PieChart;

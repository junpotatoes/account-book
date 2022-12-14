import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as chartJS } from "chart.js/auto";

function PieChart2({ chartData3, userData3 }) {
  // return (
  //   <div className="chart__Box__2">
  //     <Pie data={chartData3} />
  //     <div className="chart__content__2"></div>
  //   </div>
  // );
  return (
    <div className="chart__box__2">
      <Pie data={chartData3} />
      <div className="chart__content__2">
        <div>
          {userData3.labels?.map((el, idx) => {
            return (
              <div className="title__content" key={idx}>
                {el}
              </div>
            );
          })}
        </div>
        <div>
          {userData3.datasets[0].data?.map((el, idx) => {
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

export default PieChart2;

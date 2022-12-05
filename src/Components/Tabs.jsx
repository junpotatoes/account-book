import { useState } from "react";
import "../css/Tabs.css";
import PlusModal from "./PlusModal";
import MinusModal from "./MinusModal";
import BarChart from "./BarChart";
import { Data } from "./Data";
import PieChart from "./PieChart";
import { Data2 } from "./Data2";
import { Data3 } from "./Data3";
import PieChart2 from "./PieChart2";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  // 수입 파이형 차트상태
  const [userData2, SetUserData2] = useState({
    labels: Data2.map((data) => data.title),
    datasets: [
      {
        label: ["income"],
        data: Data2.map((data) => data.income),

        backgroundColor: ["#B4B2FF", "red", "blue", "black", "gray", "orange"],
      },
    ],
  });
  // 지출 파이형 차트상태
  const [userData3, SetUserData3] = useState({
    labels: Data3.map((data) => data.title),
    datasets: [
      {
        label: ["expense"],
        data: Data3.map((data) => data.expense),

        backgroundColor: ["#B4B2FF", "red", "blue", "black", "gray", "orange"],
      },
    ],
  });

  // 막대바 차트상태
  const [userData, SetUserData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: ["Plus"],
        data: Data.map((data) => data.Plus),

        backgroundColor: "#B4B2FF",
      },
      {
        label: ["Minus"],
        data: Data.map((data) => data.Minus),

        backgroundColor: "#FAB5B5",
      },
    ],
  });

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="big__Container">
      <div className="left__Block"></div>
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            캘린더
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            월별통계
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            설정
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <PlusModal />
            <MinusModal />
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="barchart__container">
              <PieChart chartData2={userData2} />
              <PieChart2 chartData3={userData3} />
            </div>
            <BarChart chartData={userData} />
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          ></div>
        </div>
      </div>
      <div className="right__Block"></div>
    </div>
  );
}

export default Tabs;

import { useState } from "react";
import "../css/Tabs.css";
import PlusModal from "./PlusModal";
import MinusModal from "./MinusModal";
import BarChart from "./BarChart";
import { Data } from "./Data";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const [userData, SetUserData] = useState({
    labels: Data.map((data) => data.month),
    datasets: [
      {
        label: ["Plus"],
        data: Data.map((data) => data.Plus),
        borderWidth: 2,
      },
      {
        label: ["Minus"],
        data: Data.map((data) => data.Minus),
        borderWidth: 2,
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

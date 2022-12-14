import { useState } from "react";
import "../css/Tabs.css";
// import Modal from "./Modal
import CalendarSub from "./CalendarSub";
import Account from "./Account";
import Management from "./Management";
import { Calender } from "./Calendar";
import PlusModal from "./PlusModal";
import MinusModal from "./MinusModal";
import { Data } from "./Data";
import { Data2 } from "./Data2";
import { Data3 } from "./Data3";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import PieChart2 from "./PieChart2";

function Tabs() {
  const tapPage = ["캘린더", "월별 통계", "설정"];
  const [currenTab, SetCurrenTab] = useState(0);
  const [rander, setRander] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [subdata, setSubdata] = useState([]);
  // 수입 파이형 차트상태

  // console.log(subdata)

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
  
  return (
    <div className="layout">
      <ul className="tap__title">
        {tapPage.map((el, idx) => (
          <li
            key={idx}
            className="tap__list__docs"
            onClick={() => SetCurrenTab(idx)}
          >
            <span>{el}</span>
          </li>
        ))}
      </ul>
      <main className="tap_content">
        <div className={`${currenTab !== 0 ? "Dn" : "flex__row"}`}>
          <div className="flex__3">
            <div className="tap_submiut">
              <PlusModal rander={rander} setRander={setRander}/>
              <MinusModal rander={rander} setRander={setRander}/>
            </div>
            <Calender rander={rander} setSubdata={setSubdata}/>
          </div>
          <div className="flex__1">
            <CalendarSub subdata={subdata}/>
          </div>
        </div>
        <div className={`${currenTab !== 1 ? "Dn" : "flex__column"}`}>
          <div className="flex__1">
            <div className="chart">
              <PieChart chartData2={userData2} />
              <PieChart chartData2={userData2} />
              <PieChart2 chartData3={userData3} />
              <PieChart2 chartData3={userData3} />
            </div>
          </div>
          <div className="flex__1">
            <div className="chart">
              {/* <div>월별 지출 파트</div> */}
              <BarChart chartData={userData} />
            </div>
          </div>
        </div>
        <div className={`${currenTab !== 2 ? "Dn" : "flex__column"}`}>
          <div className="flex__1">
            <Account />
          </div>
          <div className="flex__1">
            <Management />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tabs;

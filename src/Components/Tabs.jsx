import { useState } from "react";
import "../css/Tabs.css";
// import Modal from "./Modal";
import CalendarSub from "./CalendarSub";
import Account from "./Account";
import Management from "./Management";
import Settings from "./Settings";
import {Calender} from "./Calendar";



function Tabs() {
  const tapPage = ["캘린더", "월별 통계", "설정"];
  const [currenTab, SetCurrenTab] = useState(0);

  return (
    <div className="layout">
      <ul className="tap__title">
        {tapPage.map((el, idx) => (
          <li
            key={idx}
            className="tap__list__docs"
            onClick={() => SetCurrenTab(idx)}
          >
            {el}
          </li>
        ))}
      </ul>
      <main className="tap_content">
          <div className={`${currenTab !== 0 ? "Dn" : "flex__row"}`}>
              <div className="flex__3"><Calender></Calender></div>
              <div className="flex__1"><CalendarSub/></div>
          </div>
          <div className={`${currenTab !== 1 ? "Dn" : "flex__column"}`}>
              <div className="flex__1">{/*컴포넌트1*/}</div>
              <div className="flex__1">{/*컴포넌트2*/}</div>
          </div>
          <div className={`${currenTab !== 2 ? "Dn" : "flex__column"}`}>
              <div className="flex__1"><Account/></div>
              <div className="flex__1"><Management/></div>
          </div>
      </main>
    </div>
  );
}

export default Tabs;

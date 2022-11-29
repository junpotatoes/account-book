import { useState } from "react";
import "../css/Tabs.css";
// import Modal from "./Modal";
import Calendar from './Calendar';
import CalendarSub from "./CalendarSub";
import Settings from "./Settings";

function Tabs() {
  const tapPage = ["캘린더", "월별 통계", "설정"];
  const [currenTab, SetCurrenTab] = useState(0); 
  console.log(currenTab)
  

  return(
    <div className="layOut">
      <div>
        <ul className="tap__List">
          {tapPage.map((el, idx)=> 
          <li
           key={idx}
           className="tap__List__Docs"
           onClick={ () => SetCurrenTab(idx)}
           >{el}</li>
          )}
        </ul>
        <div>
          <div hidden={currenTab !== 0}>
            {/* <p>캘린더 관련 컴포넌트들</p> */}
            <Calendar/>
          </div>
          <div hidden={currenTab !== 1}>
            {/* <p>월별 통계 관련 컴포넌트들</p> */}
          </div>
          <div hidden={currenTab !== 2}>
            {/* <p>설정 관련 컴포넌트들</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default Tabs;

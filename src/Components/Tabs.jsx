import { useState } from "react";
import "../css/Tabs.css";
// import Modal from "./Modal";
import Calendar from './Calendar';
import CalendarSub from "./CalendarSub";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

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
            {/* <Modal /> */}
            <div className="test">
              <div>
                <Calendar/>
              </div>
              <div>
                <CalendarSub/>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          ></div>

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

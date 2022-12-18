import { useState } from "react";
import "../css/Tabs.css";
import CalendarSub from "./CalendarSub";
import Account from "./Account";
import Management from "./Management";
import { Calender } from "./Calendar";
import PlusModal from "./PlusModal";
import MinusModal from "./MinusModal";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import PieChart2 from "./PieChart2";
import { useEffect } from "react";
import { height } from "@mui/system";

function Tabs() {
  const tapPage = ["캘린더", "월별 통계", "설정"];
  const [currenTab, SetCurrenTab] = useState(0);
  const [rander,setRander] = useState(false);
  const [subdata, setSubdata] = useState([])

  // 월별 수입 그래프
  const [userData2, setUserData2] = useState({
    // labels: ["월급", "부수입", "용돈",setRander "상여금", "금융소득", "기타"],
    options: {
      responsive: true,
      legend: {
        display: false, // label 숨기기
      },
    },
    datasets: [
      {
        label: ["income"],
        backgroundColor: [
          "#B4B2FF",
          "#DEDDFF",
          "#6D6AFA",
          "#A2EDFD",
          "#C270DF",
          "#2E9BFF",
        ],
      },
    ],
  });
  useEffect(() => {
    const arr = new Array(6).fill(0);
    fetch("http://localhost:4000/2022/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((el) => {
          if (el.value === "income") {
            arr[el.title] = Number(el.price);
          }
        });

        const filteredData = data.filter((el) => el.value === "income");
        const SetPutData2 = {
          labels: filteredData.map((el) => el.title),
          datasets: [
            {
              data: filteredData.map((el) => el.price),
              backgroundColor: [
                "#B4B2FF",
                "#DEDDFF",
                "#6D6AFA",
                "#A2EDFD",
                "#C270DF",
                "#2E9BFF",
              ],
            },
          ],
        };

        setUserData2(SetPutData2);
      });
  }, []);

  //월별 지출 그래프

  const [userData3, setUserData3] = useState({
    labels: [
      "식비",
      "교통비",
      "문화생활",
      "패션/미용",
      "생활용품",
      "주거/통신",
      "기타",
    ],
    datasets: [
      {
        label: ["expenses"],
        backgroundColor: [
          "#B4B2FF",
          "#DEDDFF",
          "#6D6AFA",
          "#A2EDFD",
          "#C270DF",
          "#2E9BFF",
        ],
      },
    ],
  });
  useEffect(() => {
    const arr = new Array(7).fill(0);
    fetch("http://localhost:4000/2022/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((el) => {
          if (el.value === "expenses") {
            arr[el.title] = Number(el.price);
          }
        });

        const filteredData3 = data.filter((el) => el.value === "expenses");
        const setPutData3 = {
          labels: filteredData3.map((el) => el.title),
          datasets: [
            {
              data: filteredData3.map((el) => el.price),
              backgroundColor: [
                "#B4B2FF",
                "#DEDDFF",
                "#6D6AFA",
                "#A2EDFD",
                "#C270DF",
                "#2E9BFF",
              ],
            },
          ],
        };

        setUserData3(setPutData3);
      });
  }, []);

  //막대그래프
  const [userData, setUserData] = useState({
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        label: ["income"],
        backgroundColor: "#B4B2FF",
      },

      {
        label: ["expenses"],
        backgroundColor: "#FAB5B5",
      },
    ],
  });

  useEffect(() => {
    const arr = new Array(12).fill(0);
    const arr2 = new Array(12).fill(0);

    fetch("http://localhost:4000/2022/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.forEach((el) => {
          if (el.value === "income") {
            arr[el.month - 1] += Number(el.price);

            return;
          }

          if (el.value === "expenses") {
            arr2[el.month - 1] += Number(el.price);
          }
          
        });

        setUserData({
          labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          datasets: [
            {
              label: ["Plus"],
              data: arr,
              backgroundColor: "#B4B2FF",
            },
            {
              label: ["Minus"],
              data: arr2,
              backgroundColor: "#FAB5B5",
            },
          ],
        });
      });
  }, []);

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
            <CalendarSub subdata={subdata} rander={rander}/>
          </div>
        </div>
        <div className={`${currenTab !== 1 ? "Dn" : "flex__column"}`}>
          <div className="flex__1">
            <div className="chart">
              <PieChart
                chartData2={userData2}
                userData2={userData2}
                style={{ width: "400px", height: "400px" }}
              />
              <PieChart2 chartData3={userData3} userData3={userData3} />
            </div>
          </div>

          <div className="flex__1">
            <div className="chart">
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

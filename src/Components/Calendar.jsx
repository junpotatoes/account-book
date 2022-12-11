import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { addDays, parse, isSameMonth } from "date-fns";
import "../css/Calendar.css";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className="a">
      <div className="a-1">
        <div className="a-2">
          <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
        </div>
        <div className="a-2">
          <span>{format(currentMonth, "yy")}년</span>
          <span>{format(currentMonth, "M")}월</span>
        </div>
        <div className="a-2">
          <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
        </div>
      </div>
    </div>
  );
};

const RenderDays = () => {
  const days = [];
  const date = ["일", "월", "화", "수", "목", "금", "토"];

  for (let i = 0; i < 7; i++) {
    days.push(
      <div key={i} className="b-1">
        {date[i]}
      </div>
    );
  }

  return <div className="b">{days}</div>;
};

const RenderCells = ({ currentMonth, income, expenses }) => {

  const monthStartDay = startOfMonth(currentMonth);
  const monthEndDay = endOfMonth(monthStartDay);
  const startWeekDay = startOfWeek(monthStartDay);
  const endWeekDay = endOfWeek(monthEndDay);

  
  
  const rows = [];
  let days = [];
  let day = startWeekDay;
  let formattedDate = "";
  let allDate = "";


  
  
  while (day <= endWeekDay) {
    console.log("첫달을 시작하는 1일:",monthStartDay)
    console.log("첫달을 시작하는 1일이 속한 주에 첫날짜 :",startWeekDay)
    
  
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      allDate = format(day, "yMd")
      

      let up = income.filter( e => e.date === allDate)
      let down = expenses.filter( e => e.date === allDate)
      
      const _up = up.reduce(
        (accumulate, currentValue) => accumulate + Number(currentValue.price),0);
      const _down = expenses.reduce(
        (accumulate, currentValue) => accumulate + Number(currentValue.price),0);

    

      days.push(
        <div
          key={day}
          className={`c-2 ${!isSameMonth(day, monthStartDay) ? "test" : null}`}
        >
          <span>{formattedDate}</span>
          {up.length === 0 ? null : <p
          className={`${!isSameMonth(day, monthStartDay) ? "case" : null}`}
          >+{_up}</p>}
          {down.length === 0 ? null : <p
          className={`${!isSameMonth(day, monthStartDay) ? "case" : null}`}
          >-{_down}</p>}
        </div>
      );

      day = addDays(day, 1);
    }

    rows.push(
      <div key={day} className="c-1">
        {days}
      </div>
    );
    days = [];
  }
  return <div className="c">{rows}</div>;
};

export const Calender = ({exit}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  
  
  

  
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  useEffect(()=>{
        fetch("http://localhost:4000/2022/")
        .then( res => {
          return res.json();
        })
        .then((data) => {
          // 배열안의 객체를 넣을때
          // 배열안의 기본값을 유지하고 객체를 스프레드 문법으로 추가하는방법은?
          const up = [];
          const down = [];

          for (let i of data) {
            if (i.value === "income") {
              up.push(i);
            } else {
              down.push(i);
            }
          }
          setIncome(up);
          setExpenses(down);
        });
      

      
  }, [exit]);

  return (
    <div className="all">
      {/* 월 변경과 년 월을 나타냄*/}
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      {/* 요일 데이터 */}
      <RenderDays />
      {/* 부모의 값으로 한달 day에 내용을그림 */}
      <RenderCells
        currentMonth={currentMonth}
        income={income}
        expenses={expenses}
      />
    </div>
  );
};

/*
1. 서버에 있는 날짜 date를 가져온다.
2. 현재의 currentMonth의 년,월 데이터와 서버의 년.월 데이터가 같은지비교
3. 같은 값의 데이터가 있다면 state값에 저장한다.
4. 
*/ 
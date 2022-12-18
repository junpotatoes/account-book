import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { addDays, parse, isSameMonth } from "date-fns";
import "../css/Calendar.css";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <div className="header">
      <div className="header__docs">
        <div className="header__docs__ch">
          <Icon icon="material-symbols:arrow-left-rounded" onClick={prevMonth} className="icon"/>
        </div>
        <div className="header__docs__ch">
          <span>{format(currentMonth, "yy")}년</span>
          <span>{format(currentMonth, "M")}월</span>
          <Icon icon="lucide:calendar-days" className="icon2"/>
        </div>
        <div className="header__docs__ch">
          <Icon icon="material-symbols:arrow-right-rounded" onClick={nextMonth} className="icon"/>
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
      <div 
      key={i} 
      className={`sub__week__docs`}>
        {date[i]}
      </div>
    );
  }

  return <div className="sub__week">{days}</div>;
};

const RenderCells = ({ currentMonth, income, expenses, simple, setSubdata}) => {

  const monthStartDay = startOfMonth(currentMonth);
  const startWeekDay = startOfWeek(monthStartDay);
  const monthEndDay = endOfMonth(monthStartDay);
  const endWeekDay = endOfWeek(monthEndDay);
  
  
  

  
  
  const rows = [];
  let days = [];
  let day = startWeekDay;
  let formattedDate = "";
  let allDate = "";

  
  
  while (day <= endWeekDay) {

    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, "d");
      allDate = format(day, "yMd")
      

      let up = income.filter( e => e.date === allDate)
      let down = expenses.filter( e => e.date === allDate)
      
      
      const _up = up.reduce(
        (accumulate, currentValue) => accumulate + Number(currentValue.price),0);
      const _down = down.reduce(
        (accumulate, currentValue) => accumulate + Number(currentValue.price),0);
      

      
      let detailed = {
        md: format(day, `M월dd일`),
        total: [_up,_down],
        individual: simple.filter((e) => e.date === allDate ),
      }
    
  
      days.push(
        <div
          key={day}
          className="month__day"
          onClick={ () => setSubdata(detailed)}
        >
          <span>{!isSameMonth(day, monthStartDay) ? null : formattedDate}</span>
          {up.length === 0 ? null : 
          <p className={`${!isSameMonth(day, monthStartDay) ? "same_font" : "money_blue"}`}>+{String(_up).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}</p>}
          {down.length === 0 ? null :
           <p className={`${!isSameMonth(day, monthStartDay) ? "same_font" : "money_red"}`}>-{String(_down).replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,')}</p>}
        </div>
      );

      day = addDays(day, 1);
      
      
    }
    
    
    rows.push(
      <div key={day} className="month__week">
        {days}
      </div>
    );
    days = [];
  }
  
  return <div className="month">{rows}</div>;
};

export const Calender = ({rander, setSubdata}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [simple, setSimple] = useState([]); 
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
          setSimple(data);
        });
      

      
  }, [rander]);
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
        simple={simple}
        setSubdata={setSubdata}
      />
    </div>
  );
};

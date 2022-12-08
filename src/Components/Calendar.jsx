//출처 : https://sennieworld.tistory.com/61

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
//  공식문서 요일 기준 기본값 -> [일, 월, 화, 수, 목, 금, 토]
// startOfMonth : 주어진 날짜의 월에서 시작하는 day를 반환
// endOfMonth : 주어진 날짜의 월에서 끝나는 day를 반환
// startOfWeek : 주어진 날짜의 주에서 시작하는 day를 반환
// endOfWeek : 주어진 날짜의 주에서 끝나는 day를 반환
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
// isSameMonth : 두개의 날짜인자를 받아 바교하는 함수 => 글자가 섞여있는 형식이라그런듯
// isSameDay : 두개의 day인자를 받아 바교하는 함수
// addDays : 현재의 day를 증가
// parse : ???
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

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
  // console.log(currentMonth);
  // console.log(selectedDate);
  //  Fri Dec 02 2022 01:02:14 GMT+0900 (한국 표준시)
  // console.log(onDateClick);
  // 선택한날의 값을변경해주는역할

  // 오늘이 속한달의 첫날짜 => 무조건 1이다 매달 1일부터시작이니
  const monthStartDay = startOfMonth(currentMonth);

  // 오늘이 속한달의 마지막날짜 : 30 or 31 // 2월은 28일~
  const monthEndDay = endOfMonth(monthStartDay);

  // fns공식문서에는 일,월,화,수,목,금,토 을기준으로 일요일이 0인덱스

  // 첫째주 처음일짜 : 해당월의 첫번째 날짜의 기준으로 일요일 날짜(해당주의 첫번째day)
  const startWeekDay = startOfWeek(monthStartDay);
  // console.log(startWeekDay)

  // 마지막주  마지막일짜 : 해당월의 마지막날짜를 기준으로 토요일 날짜(해당주의 마지막day)
  const endWeekDay = endOfWeek(monthEndDay);
  // console.log(endWeekDay)

  const rows = [];
  let days = [];
  let day = startWeekDay;
  let formattedDate = "";

  // 해당월의 첫째주 처음일자부터 ~ 마지막주의 마지막일짜까지
  // 일 ~ 토 1주일기준
  // 만약 23년기준 5월 30일 ~ 6월 03일로 비교한다고했을때
  // 뒤에 날짜만 비교하는게아니고 5.30 <= 6.03 이렇게 소수점으로
  // 비교한다고 생각해야한다 즉 월의 값도 비교한다고 생각!
  console.log(startWeekDay);
  console.log(monthStartDay);
  // console.log("마지막주 마지막날",endWeekDay)
  // console.log("속한달의 마지막날짜",monthEndDay)
  // console.log(monthEndDay < endWeekDay)
  while (day <= endWeekDay) {
    // 한주를 그리기위한 7일 반복문
    for (let i = 0; i < 7; i++) {
      // 변수에 할당할때 라이브러리 메서드로 format(형식을 지정한다)
      // 하나의 값만 넣는다~ "dd" 추가를할경우 1의 자리숫자에는 0이붙는다.
      // day는 첫번째의 값을 현재값그대로 ~
      formattedDate = format(day, "d");

      // 첫째주의 속한 첫번째 날짜를 복사
      const cloneDay = day;

      // 반복문을 돌면서 format으로 지정한 형식의 날짜를 집어넣는다.
      days.push(
        <div
          /* className={
                    // 기본클래스 할당
                    `col cell 
                    ${day < monthStartDay ? "test" : null} :  해당달의 첫주 날짜  < 해당달의 시작 날짜
                    ${monthEndDay < endWeekDay ? "test" : null} : 해당달의 마지막 날짜 < 해당달 마지막주의 마지막 날짜 : 현재 증가되는 값이없음 그렇기때문에 전체가 색칠
                    1. 해당 날짜가 속한 첫주의 첫날짜와 해당월의 시작 날짜의 월을 비교
                    2. 해당 날짜가 속한 첫주의 첫날짜와 
                    ${ !isSameMonth(day, monthStartDay) ? '클래스' : isSameDay(day, selectedDate) ? 'selected' : format(currentMonth, 'M') !== format(day, 'M')? 'not-valid': 'valid'                          현재날짜를 표시해주는 방법? */
          key={day}
          className={`c-2  ? null : "test"}`}
          onClick={() => onDateClick(parse(cloneDay))}
        >
          <span>{formattedDate}</span>
        </div>
      );

      // day값 증가 증가시키지 않으면 무한루프다.
      // 라이브러리 메서드형식  addDays(변경할날짜, 증가할숫자=> 소수점을표시되지않음)
      day = addDays(day, 1);
    }

    //  while 조건이 만족할때까지 rows배열에
    //  for문을 돌면서 만들어진 주를 7일씩 푸쉬한다.
    rows.push(
      <div key={day} className="c-1">
        {days}
      </div>
    );

    // 한주를 담은 days배열을 초기화
    days = [];
  }

  // console.log("-----------------")
  return <div className="c">{rows}</div>;
};

export const Calender = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  // 현재 요일 / 몇월 / 날짜 / 시간,분,초
  // console.log(currentMonth)

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day) => {
    console.log(day);
    setSelectedDate(day);
  };
  return (
    <div className="all">
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </div>
  );
};

/*
[new Date(); : 기본 js지원 ]
->현재의 년 월 일 요일 시간,분,초 를 나타냄
const date1 = new Date(); // Mon Oct 11 2021 19:42:26 GMT+0900 (한국 표준시)
const date2 = new Date("


import {format} from "date-fns" 
[구문] format(data객체, "yy-MM-dd형식") 
ex) y = 년, M = 달, d = 일, HH:mm:ss = 시:분:초


*/

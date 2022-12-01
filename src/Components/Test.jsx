import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import "../css/Test.css";

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="a">
            <div className="a-1">
                <div className="a-2">
                    <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
                </div>
                <div className="a-2">
                    <span>{format(currentMonth, 'yy')}년</span>
                    <span>{format(currentMonth, 'M')}월</span>
                </div>
                <div className="a-2">
                    <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
                </div>
            </div>
        </div>
    );
};

// 날짜를 일요일 부터 ~ 토요일의 값을 담은 배열을 출력한다
// 반복문을 통해서 빈배열에 date의 값을 태그형식으로 집어넣는다 ? 신기하다...
//그것을 통해 다시한번감싸서 리턴 jsx...
const RenderDays = () => {
    const days = [];
    const date = ['일', '월', '화', '수', '목', '금', '토'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div key={i} className="b-1">
                {date[i]}
            </div>,
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

    // 오늘이 속한달한의 시작일 : 1
    const monthStart = startOfMonth(currentMonth);

    // 오늘이 속한달의 마지막일 : 30 & 31 & 28
    const monthEnd = endOfMonth(monthStart);

    // 오늘이 속한주의 시작일짜 : 
    const startDate = startOfWeek(monthStart);
    
    // 오늘이 속한주의 마지막일짜 :
    /*
    한주에서 다음달로 넘어가는주가 있는데
    그런주들은  1주일을 채우지 못한주를 채우게된다. 
    그냥 말그대로 1주는 7일이다 해당월의 주를표현하다보면 다른 월날짜랑 겹치는거임!
    */ 
    const endDate = endOfWeek(monthEnd);
    
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';



    // 오늘이 속한주의 시작일짜 <= 오늘이 속한주의 마지막일짜 
    while (day <= endDate) {
        // 한주를 그리기위한 7일 반복문
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div key={day} className="d-1"  onClick={() => onDateClick(parse(cloneDay))} >
                    <span>{formattedDate}</span>
                </div>,);
            day = addDays(day, 1);
        } // for문 마지막문단

        rows.push(
            <div key={day}  className="d" >{days}</div>);
        days = [];
    }
    return <div className="c">{rows}</div>;
};

export const Calender = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onDateClick = (day) => {
        setSelectedDate(day);
    };
    return (
        <div className='all'>
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

const date1 = new Date(); // Mon Oct 11 2021 19:42:26 GMT+0900 (한국 표준시)
const date2 = new Date("

import { format } from "date-fns"; 필수
[format() : 포멧지정 -> 말그대로 형식지정이다 출력형식~]

var date = new Date("2021-10-11 10:30:25"); // Mon Oct 11 2021 10:30:25 GMT+0900 (한국 표준시)

format(date, "yy-MM-dd"); // 21-10-11
format(date, "dd/MM/yy"); // 11/10/21
format(date, "yyyy.MM.dd HH:mm:ss"); // 2021.10.11 10:30:25


*/
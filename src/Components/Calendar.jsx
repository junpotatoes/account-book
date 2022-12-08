import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from 'date-fns'; 
import "../css/Calendar.css";
// import db from "../../server/db.json"




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

const RenderCells = ({ currentMonth }) => {
    
    const monthStartDay = startOfMonth(currentMonth);
 
    const monthEndDay = endOfMonth(monthStartDay);
    
    const startWeekDay = startOfWeek(monthStartDay);
    
    const endWeekDay = endOfWeek(monthEndDay);
    
    const rows = [];
    let days = [];
    let day = startWeekDay;
    let formattedDate = '';

    while (day <= endWeekDay) {

        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            
            
            days.push(
                <div
                key={day} 
                className={`c-2`}> 
                    <span>{formattedDate}</span>
                    <p>+</p>
                    <p>-</p>
                </div>);

            day = addDays(day, 1);
        } 

        rows.push(
            <div key={day}  className="c-1" >{days}</div>);

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
        console.log(day)
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

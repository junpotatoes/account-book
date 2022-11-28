import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';


// https://fullcalendar.io/docs/react
// https://dhdl-it.tistory.com/60
const MyCalendar = () => {
    
        return (
          <div>
            <FullCalendar 
              defaultView="dayGridMonth" 
              plugins={[ dayGridPlugin ]}
            />
          </div>
        );
}
export default MyCalendar;
import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function Datepicker({ setDate, setMonth }) {
  const [value, setValue] = React.useState(null);

  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="date_picker">
        <DatePicker
          label="날짜를 선택해주세요"
          value={value}
          inputFormat="YYYY/MM/DD/"
          onChange={(newValue) => {
            setValue(newValue);
            setDate(`${newValue.$y}${newValue.$M + 1}${newValue.$D}`);
            setMonth(newValue.$M + 1);
            // setDate(dayjs(newValue).format("YYYYMMDD"))
            // console.log(dayjs(newValue).format("YYYYMMDD"))    
            
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}

export default Datepicker;

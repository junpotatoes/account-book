import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Datepicker({setDate}) {
  const [value, setValue] = React.useState(null);
  // let result  = `${value.$y + value.$M + value.$D}`
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="date_picker">
        <DatePicker
          label="날짜를 선택해주세요"
          value={value}
          onChange={(newvalue) => {
            setValue(newvalue);
            setDate(`${newvalue.$y}${newvalue.$M + 1}${newvalue.$D}`)
          
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}

export default Datepicker;

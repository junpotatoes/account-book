import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function Datepicker({ setDate }) {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="date_picker">
        <DatePicker
          label="날짜를 선택해주세요"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            setDate(`${newValue.$y}${newValue.$M + 1}${newValue.$D}`);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}

export default Datepicker;

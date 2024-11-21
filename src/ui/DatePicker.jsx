import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import './datepicker.css';

const DatePicker = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="">
      <div className="m-0 cursor-pointer rounded-sm  p-0 text-gray-600">
        <Calendar
          value={date}
          onChange={(e) => setDate(e.value)}
          monthNavigator
          yearNavigator
          yearRange="2020:2030"
          showIcon
          className="p-calendar"
        />
      </div>
    </div>
  );
};

export default DatePicker;

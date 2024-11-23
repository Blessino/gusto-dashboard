import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

const DatePicker = ({ showIcon = fasle }) => {
  const [date, setDate] = useState(null);

  return (
    <div className="p-calendar h-10 w-96 cursor-pointer border-none bg-gray-100 text-gray-600 focus:outline-none">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        monthNavigator
        yearNavigator
        yearRange="2020:2030"
        showIcon={showIcon}
        className="w-full"
        placeholder='DD/MM/YYYY'
      />
    </div>
  );
};

export default DatePicker;



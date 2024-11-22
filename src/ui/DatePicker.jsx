import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

const DatePicker = ({ showIcon = fasle }) => {
  const [date, setDate] = useState(null);

  return (
    <div className="p-calendar w-96">
      <Calendar
        value={date}
        onChange={(e) => setDate(e.value)}
        monthNavigator
        yearNavigator
        yearRange="2020:2030"
        showIcon={showIcon}
        className="w-full"
      />
    </div>
  );
};

export default DatePicker;



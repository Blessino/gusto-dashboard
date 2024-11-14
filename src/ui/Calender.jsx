import React, { useState } from "react";
import "./calender.css"
import { Calendar } from "primereact/calendar";

export default function Calender() {
  const [date, setDate] = useState(null);

  return (
    <>
      <Calendar className="calender" />
    </>
  );
}

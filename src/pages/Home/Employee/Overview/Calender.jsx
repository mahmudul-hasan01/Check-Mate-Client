import React, { useState, useEffect } from 'react';
import './CustomCalendar.css';

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);

  useEffect(() => {
    // Get the current week dates
    const startOfWeek = new Date(currentDate);
    const dayOfWeek = startOfWeek.getDay(); // Get the current day of the week (0 for Sunday, 6 for Saturday)
    startOfWeek.setDate(startOfWeek.getDate() - dayOfWeek + 1); // Adjust to the start of the week (Monday)

    const week = Array.from({ length: 7 }).map((_, index) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + index);
      return date;
    });

    setWeekDates(week);
  }, [currentDate]);

  return (
    <div className="calendar-container">
      <h3>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
      <div className="week-container">
        {weekDates.map((date) => (
          <div
            key={date}
            className={`day-tile ${currentDate.toDateString() === date.toDateString() ? 'active' : ''}`}
          >
            {date.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCalendar;

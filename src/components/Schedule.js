// src/components/Schedule.js
import React, { useState, useEffect } from 'react';
import './Schedule.css';

function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const renderCalendar = (month, year) => {
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';
    document.getElementById('month-year').textContent = `${monthNames[month]} ${year}`;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let date = 1;

    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if (i === 0 && j < firstDay) {
            cell.appendChild(document.createTextNode(''));
        } else if (date > daysInMonth) {
            break;
        } else {
          if (new Date().getMonth() === currentMonth && 6*i + j === new Date().getDate()) {
            cell.style.backgroundColor = "#eaeaea";
            let bold = document.createElement("strong");
            bold.appendChild(document.createTextNode(date));
            cell.appendChild(bold);

          } else {
            cell.appendChild(document.createTextNode(date));
          }
          date++;
        }

        row.appendChild(cell);
      }
      calendarBody.appendChild(row);
    }
  };
  
  useEffect(() => {
    renderCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear, renderCalendar]);
  
  return (
    <section id="schedule">
      <h2>Schedule</h2>
      <div className="calendar">
        <div className="calendar-header">
          <button onClick={() => setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1)}>&lt;</button>
          <span id="month-year"></span>
          <button onClick={() => setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1)}>&gt;</button>
        </div>
        <table className="calendar-table">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody id="calendar-body"></tbody>
        </table>
      </div>
    </section>
  );
}

export default Schedule;

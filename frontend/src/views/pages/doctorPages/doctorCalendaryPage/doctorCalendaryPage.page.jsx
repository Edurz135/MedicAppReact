import "./doctorCalendaryPage.styles.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { React, useEffect, useState, useRef } from "react";
export default function DoctorCalendaryPage({ isNavOpen }) {
  const events = [
    {
      title: "Cita número 1",
      start: "2022-06-21T11:00:00",
      end: "2022-06-21T11:15:00",
    },
  ];
  const calendarRef = useRef(null);
  const [nav, setNav] = useState(isNavOpen);

  useEffect(() => {
    if (isNavOpen != nav) {
      setNav(isNavOpen);
      setTimeout(refreshSize, 500);
    }
  });
  
  const refreshSize = () => {
    let calendarApi = calendarRef.current.getApi();
    calendarApi.changeView("timeGridWeek");
  };

  return (
    <div>
      <div>
        <h1 className="pt-4">Calendario</h1>
        <p className="pt-4">
          En este apartado podrá ver las citas reservadas desde una perspectiva
          mensual y semanal.
        </p>
      </div>

      <div>
        <FullCalendar
          ref={calendarRef}
          plugins={[timeGridPlugin]}
          locale="es"
          contentHeight="auto"
          slotMinTime="10:00:00"
          slotMaxTime="21:00:00"
          slotDuration="00:05"
          hiddenDays="[0, 6]"
          eventClick={(info) => {
            console.log(info);
          }}
          events={events}
        />
      </div>
    </div>
  );
}

import "./doctorCalendaryPage.styles.css";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { React, useEffect, useState, useRef } from "react";
export default function DoctorCalendaryPage({ isNavOpen }) {
  const events = [{ title: "Event Now", start: new Date() }];
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
          slotMinTime="10:00:00"
          slotMaxTime="21:00:00"
          eventClick={() => {
            console.log("evento");
          }}
          events={events}
        />
      </div>
    </div>
  );
}

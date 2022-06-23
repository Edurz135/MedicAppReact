import "./doctorCalendaryPage.styles.css";
import { React, useEffect, useState, useRef } from "react";

import { Tabs, Tab, Modal, Button } from "react-bootstrap";
import { DoctorDatePage, DoctorExtraNote } from "../../../pages"

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

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
  const [key, setKey] = useState("home");

  const [show, setShow] = useState(false);
  const [dateData, setDateData] = useState(null);

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
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cita número 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="datos" title="Datos">
              <DoctorDatePage/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <DoctorExtraNote/>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShow(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="info-container">
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
            setShow(true);
          }}
          events={events}
        />
      </div>
    </div>
  );
}

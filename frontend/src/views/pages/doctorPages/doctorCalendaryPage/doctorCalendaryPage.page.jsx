import "./doctorCalendaryPage.styles.css";
import { React, useEffect, useState, useRef } from "react";

import { Tabs, Tab, Modal, Button } from "react-bootstrap";
import { DoctorDatePage, DoctorExtraNote } from "../../../pages";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function DoctorCalendaryPage(props) {
  const calendarRef = useRef(null);
  const [nav, setNav] = useState(props.isNavOpen);
  const [key, setKey] = useState("datos");

  const [show, setShow] = useState(false);
  const [events, setEvents] = useState({});
  useEffect(() => {
    if (props.isNavOpen != nav) {
      setNav(props.isNavOpen);
      setTimeout(refreshSize, 500);
    }

    props.setCurrentTabIndex(props.data.index);

    const dataFetch = async () => {
      const rawResponse = await fetch(
        "http://localhost:5000/api/users/getdates",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ doctorId: 1 }),
        }
      );
      const content = await rawResponse.json();
      console.log(content.result);
      let data = [];
      content.result.forEach((event) => {
        data.push({
          start: event.startDate,
          end: event.endDate,
          title: "title1",
        });
      });
      setEvents(data);
    };

    dataFetch();
  }, []);

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
              <DoctorDatePage />
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <DoctorExtraNote />
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

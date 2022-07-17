import "./doctorCalendaryPage.styles.css";
import { React, useEffect, useState, useRef } from "react";

import { Tabs, Tab, Modal, Button } from "react-bootstrap";
import {
  DoctorDatePage,
  DoctorExtraNote,
  DoctorMedicalRecord,
} from "../../../pages";

import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function DoctorCalendaryPage(props) {
  const calendarRef = useRef(null);
  const [nav, setNav] = useState(props.isNavOpen);
  const [key, setKey] = useState("datos");

  const [show, setShow] = useState(false);
  const [events, setEvents] = useState({});

  const [patientData, setPatientData] = useState({});
  const [currentDateId, setCurrentDateId] = useState(1);

  useEffect(() => {
    if (props.isNavOpen != nav) {
      setNav(props.isNavOpen);
      setTimeout(refreshSize, 500);
    }

    props.setCurrentTabIndex(props.data.index);

    const dataFetch = async () => {
      // const rawResponse = await fetch(
      //   "http://localhost:5000/api/users/getdates",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ doctorId: 1 }),
      //   }
      // );
      // const content = await rawResponse.json();
      // console.log(content.result);

      const rawResponse = await fetch(
        "http://localhost:5000/api/users/getdates?" +
          new URLSearchParams({
            doctorId: 1,
          })
      );
      const content = await rawResponse.json();

      let data = [];
      content.result.forEach((event) => {
        data.push({
          start: event.startDate,
          end: event.endDate,
          patientId: event.patientId,
          doctorId: event.doctorId,
          diagnostic: event.diagnostic,
          dateId: event.id,
          title: "Cita medica",
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

  const onDateClick = async (info) => {
    const patientData = await fetch(
      "http://localhost:5000/api/users/getpatient?" +
        new URLSearchParams({
          id: info.event.extendedProps.patientId,
        })
    );
    const patientDataContent = await patientData.json();
    setPatientData(patientDataContent.result);

    setCurrentDateId(info.event.extendedProps.dateId);

    // refreshExtraNotes(info.event.extendedProps.dateId);
  };

  // const refreshExtraNotes = async () => {
  //   const extraNoteData = await fetch(
  //     "http://localhost:5000/api/users/getextranotes?" +
  //       new URLSearchParams({
  //         dateId: currentDateId,
  //       })
  //   );
  //   const extraNoteDataContent = await extraNoteData.json();
  //   setExtraNotesData({ data: extraNoteDataContent.result });
  // };

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
              <DoctorDatePage data={patientData} />
            </Tab>
            <Tab eventKey="historialmedico" title="Historial Médico">
              <DoctorMedicalRecord data={patientData} />
            </Tab>
            <Tab eventKey="notasextras" title="Notas Extras">
              <DoctorExtraNote dateId={currentDateId} />
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
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
            onDateClick(info);
            // console.log(info.event.extendedProps.doctorId);
            // console

            setShow(true);
          }}
          events={events}
        />
      </div>
    </div>
  );
}

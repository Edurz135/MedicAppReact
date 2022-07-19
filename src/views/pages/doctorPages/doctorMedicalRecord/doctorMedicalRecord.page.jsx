import { useEffect, useState } from "react";

export default function DoctorMedicalRecord(props) {
  useEffect(() => {
    refreshMedicalRecord();
  }, []);
  const [medicalRecord, setMedicalRecord] = useState(null);
  const refreshMedicalRecord = async () => {
    const medicalRecordData = await fetch(
      `http://localhost:5000/static/mr${props.data.id}.json`
    );
    const extraNoteDataContent = await medicalRecordData.json();
    setMedicalRecord(extraNoteDataContent);
  };

  return (
    <div>
      <div className="row">
        <div className="col-0 col-sm-1"></div>
        <div className="col-12 col-sm-10 pt-2">
          <p className="fs-4">Historial clínico</p>
          <div className="accordion" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Enfermedades
                </button>
              </h2>
              {medicalRecord == null ? (
                <div>No hay enfermedades.</div>
              ) : (
                medicalRecord.illnesses.map((illness) => {
                  return (
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                      key={illness.id}
                    >
                      <div className="accordion-body">
                        <p>Nombre de enfermedad: {illness.illness_name}</p>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          {medicalRecord == null ? (
            <div>No citas previas.</div>
          ) : (
            medicalRecord.official_dates.map((date) => {
              return (
                <div className="card mt-4" key={date.id}>
                  <div className="card-header">
                    <b>{date.title}</b>
                  </div>
                  <div className="card-body">
                    <p>{date.content}</p>
                    <div className="card mt-4">
                      <div className="card-header">
                        <b>Receta médica</b>
                      </div>
                      <div className="card-body">
                        <p>{date.prescription}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="col-0 col-sm-1"></div>
      </div>
    </div>
  );
}

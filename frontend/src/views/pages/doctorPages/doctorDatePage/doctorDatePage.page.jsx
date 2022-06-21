export default function DoctorDatePage() {
  return (
    <div>
      <div className="row mt-4">
        <div className="col-1 d-flex justify-content-center">
          <a href="../calendario/doctor_calendario.html">
            <i style={{fontSize: "3.5rem"}} className="bx bx-chevron-left"></i>
          </a>
        </div>
        <div className="col-11">
          <h1>Cita con Paciente 1</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 pt-4">
          <p className="fs-4">Datos Personales</p>
          <p>Nombre: Paciente 1</p>
          <p>Fecha de Nacimiento: 20/03/2000</p>
          <p>Edad: 22 años</p>
          <p>Sexo: Masculino</p>
          <hr />
          <p>Tipo de cita: Virtual</p>
          <p>Enlace al zoom: http://</p>
          <hr />
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
                  Alergias
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <strong>
                    El paciente no es alérgico a ningún medicamento.
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <b>(12-05-2021) Cita en Nefrología | Especialidad: Pediatría</b>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                labore possimus sapiente delectus. Cupiditate cumque dolores
                expedita explicabo! Architecto possimus itaque molestiae,
                necessitatibus illo odit placeat numquam nesciunt vel provident.
              </p>
              <div className="card mt-4">
                <div className="card-header">
                  <b>Receta médica</b>
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore possimus sapiente delectus. Cupiditate cumque
                    dolores expedita explicabo! Architecto possimus itaque
                    molestiae, necessitatibus illo odit placeat numquam nesciunt
                    vel provident.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-header">
              <b>(12-05-2021) Cita en Nefrología | Especialidad: Pediatría</b>
            </div>
            <div className="card-body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                labore possimus sapiente delectus. Cupiditate cumque dolores
                expedita explicabo! Architecto possimus itaque molestiae,
                necessitatibus illo odit placeat numquam nesciunt vel provident.
              </p>
              <div className="card mt-4">
                <div className="card-header">
                  <b>Receta médica</b>
                </div>
                <div className="card-body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit labore possimus sapiente delectus. Cupiditate cumque
                    dolores expedita explicabo! Architecto possimus itaque
                    molestiae, necessitatibus illo odit placeat numquam nesciunt
                    vel provident.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <form className="mt-4">
            <label for="validationTextarea" className="form-label">
              Notas Extras
            </label>
            <input
              type="text"
              className="form-control"
              id="validationServer03"
              placeholder="Título"
              aria-describedby="validationServer03Feedback"
              required
            />
            <label for="validationServer03" className="form-label"></label>
            <textarea
              className="form-control"
              id="validationTextarea"
              placeholder="Información"
              required
            ></textarea>
            <button className="btn btn-primary mt-4 mb-4">Agregar +</button>
          </form>
          <hr />
          <a className="btn btn-primary mt-4 mb-4" href="./CulminarCita.html">
            Realizar Diagnóstico
          </a>
        </div>
      </div>
      <div className="col-1"></div>
    </div>
  );
}

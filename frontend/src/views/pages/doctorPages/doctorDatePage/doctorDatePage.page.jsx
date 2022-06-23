export default function DoctorDatePage() {
  return (
    <div>
      <div className="row">
        <div className="col-0 col-sm-1"></div>
        <div className="col-12 col-sm-10 pt-2">
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
        </div>
      </div>
    </div>
  );
}

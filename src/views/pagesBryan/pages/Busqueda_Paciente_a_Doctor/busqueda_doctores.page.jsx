import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./BuscarDoctores.css";
import "../Busqueda_Paciente_a_Doctor/iconodoctor.png"

const Buscar_Doctores = () =>{
    return <div className="container-fluid">
    <div className="row">
      <div className="col-1 col-sm-1 col-md-2"></div>
      <div className="col-10 col-sm-10 col-md-8">
        <div className="mt-5">
          <h2>Buscando Doctores</h2>
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <form className="form">
              <div className="form-group">
                <label for="exampleFormControlInput1">Modalidad:</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    Presencial
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Virtual
                  </label>
                </div>
                <div className="cuadro mt-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Especialidad</option>
                    <option value="1">Dermatología</option>
                    <option value="2">Cirugía Plastica</option>
                    <option value="3">Pediatría</option>
                  </select>
                </div>
                <div className="cuadro mt-2">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Ubicacion</option>
                    <option value="1">San Borja</option>
                    <option value="2">La Molina</option>
                    <option value="3">Los Olivos</option>
                  </select>
                </div>
                <button className="btn btn-info mt-3" type="submit">
                  Buscar
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-3">
          <h3>Resultados</h3>
        </div>
        <div className="card">
          <div className="card-body">
            <img
              src="./iconodoctor.png"
              className="rounded float-left"
              width="80"
              height="80"
            />
            Doctor 1
            <p>
              Ubicacion: ########## Preciode consulta: ########## <br />
              Atencion: ###########
            </p>
          </div>
          <div>
            <h5>Reseñas:</h5>
            <p>
              Sagasti Ronaldo: <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus, nisl et suscipit iaculis, magna nisi blandit orci, sed
              tristique nulla dui at purus. Nulla scelerisque efficitur sem,
              sed cursus mauris tempor nec. Morbi varius lectus molestie nisi
              faucibus, ac semper ligula vestibulum. Aenean eget tempor fe.
            </p>
            <a href="*"className="btn btn-info" type="submit">
              Ver perfil
            </a>
          </div>
        </div>
      </div>
      <div className="col-1 col-sm-1 col-md-2"></div>
    </div>
  </div>
}
export default Buscar_Doctores
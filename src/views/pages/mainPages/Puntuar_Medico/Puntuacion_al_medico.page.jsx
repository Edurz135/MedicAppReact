import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Puntuar.js";
import "./PuntuarM.css";
import "../Puntuar_Medico/img/iconodoctor.png"

const Puntuar_a_Medicos = () => {
    return <div className="container-fluid">
    <div className="row">
      <div className="col-1 col-sm-1 col-md-2"></div>
      <div className="col-10 col-sm-10 col-md-8">
        <div className="card">
          <div className="card-body">
            <img
              src="./img/iconodoctor.png"
              className="rounded float-left"
              width="80"
              height="80"
            />
            <h1>Doctor 1</h1>

            <div className="d mt-5">
              <h3>Datos:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                cursus, nisl et suscipit iaculis, magna nisi blandit orci, sed
                tristique nulla dui at purus. Nulla scelerisque efficitur sem,
                sed cursus mauris tempor nec. Morbi varius lectus molestie
                nisi faucibus, ac semper ligula vestibulum. Aenean eget tempor
                felis, ut consectetur magna. Quisque scelerisque nisi sed
                ullamcorper posuere. Quisque vestibulum tempor justo sed
                interdum.
              </p>
            </div>
          </div>

          <div className="card-body">
            <div>
              <h5>Comentarios:</h5>

              <div className="container">
                <div className="row">
                  <div className="container-faq">
                    <div className="item-faq">
                      <div className="question">
                        <label
                          for="exampleFormControlTextarea1"
                          className="form-label"
                          >Paciente: ######</label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                        <button type="button" className="btn btn-outline-primary">
                          Comentar
                        </button>

                        <span
                          className="fa fa-star"
                          onclick="calificar(this)"
                          id="1estrella"
                        ></span>
                        <span
                          className="fa fa-star"
                          onclick="calificar(this)"
                          id="2estrella"
                        ></span>
                        <span
                          className="fa fa-star"
                          onclick="calificar(this)"
                          id="3estrella"
                        ></span>
                        <span
                          className="fa fa-star"
                          onclick="calificar(this)"
                          id="4estrella"
                        ></span>
                        <span
                          className="fa fa-star"
                          onclick="calificar(this)"
                          id="5estrella"
                        ></span>
                      </div>
                    </div>
                  </div>
                  <a
                    href="../paciente_25.html"
                    type="button"
                    className="btn btn-info text-center"
                    >Publicar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 col-sm-1 col-md-2"></div>
    </div>
  </div>
}

export default Puntuar_a_Medicos


import "./InicioMedico.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Medico_Comentarios1 = () => {
    return <div>
    <section className="paginacion">
      <ul>
        Filtrado Puntuación en:
        <li><a href="iniciomedico_comentarios1.page.jsx" className="active">1</a></li>
        <li><a href="iniciomedico_comentarios2.page.jsx">2</a></li>
        <li><a href="iniciomedico_comentarios3.page.jsx">3</a></li>
        <li><a href="iniciomedico_comentarios4.page.jsx">4</a></li>
        <li><a href="iniciomedico_comentarios5.page.jsx">5</a></li>
      </ul>
    </section>
    <div className="container">
      <div className="row">
        <div className="container-faq">
          <div className="item-faq">
            <div className="question">
              <p>
                Nombre del Paciente: ######## <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit
              </p>

              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
          </div>

          <div className="item-faq">
            <div className="question">
              <p>
                Nombre del Paciente: ######## <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit
              </p>

              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
          </div>

          <div className="item-faq">
            <div className="question">
              <p>
                Nombre del Paciente: ######## <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit
              </p>

              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Medico_Comentarios1
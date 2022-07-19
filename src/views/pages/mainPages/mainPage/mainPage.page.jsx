import { useNavigate } from "react-router-dom";
import "./mainPage.styles.css";

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row content-header" style={{height: "90vh"}}>
        <div className="col-1 col-md-1"></div>
        <div className="col-11 col-md-10 d-flex align-items-center">
          <div>
            <p>Encuentra un doctor</p>
            <h1>Tu salud nos</h1>
            <h1>importa</h1>
            <a
              className="btn btn-info btn-lg boton"
              onClick={() => {navigate('/home/')}}
            >
              Ver doctores
            </a>
          </div>
        </div>
        <div className="col-0 col-md-1"></div>
      </div>
    </div>
  );
}

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Register_Paciente/main.css";

const Registro_Paciente = () =>{
    return <div id="containerL" className="container-fluid">
    <div className="row">
      <div className="col-1 col-sm-3 col-lg-4"></div>
      <div className="col-10 col-sm-6 col-lg-4">
        <br />
        <h1>Registro de Paciente</h1>
        <br />
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label"
            >Correo Electronico</label>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">*nombre@ejemplo.com</label>
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label"
            >Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div id="passwordHelp" className="form-text">
            *Ingrese una contraseña que le sea facil de recordar
          </div>
        </div>
        <div>
          <label for="exampleInputPassword1" className="form-label"
            >Nombre Completo</label>
          <input type="text" className="form-control" />
          <div id="passwordHelp" className="form-text">
            *Ingrese sus datos reales
          </div>
        </div>
        <a
          /* href="../../../layouts/mainLayout/index.html" */
          className="btn btn-outline-primary guardarcambios"
          role="button"
          >Registrarse</a>
      </div>
    </div>
    <div className="col-1 col-sm-3 col-lg-4"></div>
  </div>
}
export default Registro_Paciente
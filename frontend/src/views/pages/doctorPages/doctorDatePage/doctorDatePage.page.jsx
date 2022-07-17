export default function DoctorDatePage(props) {
  return (
    <div>
      <div className="row">
        <div className="col-0 col-sm-1"></div>
        <div className="col-12 col-sm-10 pt-2">
          <p className="fs-4">Datos Personales</p>
          <p>
            Nombre: {props.data.firstName} {props.data.lastName}
          </p>
          <p>Edad: {props.data.age} años</p>
          <p>Sexo: {props.data.gender == "M" ? "Masculino" : "Femenino"}</p>
          <hr />
          <p>Tipo de cita: Virtual</p>
          <p>Enlace al zoom: http://</p>
        </div>
      </div>
    </div>
  );
}

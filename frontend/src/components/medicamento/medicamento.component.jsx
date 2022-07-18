export default function HomeNavbar(props) {
  return (
    <div className="row g-3 mb-1">
      <div className="col-sm-6">
        <input
          type="text"
          className="form-control espacio"
          placeholder="Medicamento"
          aria-label="Medicamento"
        />
      </div>
      <div className="col-sm">
        <input
          type="text"
          className="form-control espacio"
          placeholder="Frec."
          aria-label="Frecuencia"
        />
      </div>
      <div className="col-sm">
        <input
          type="text"
          className="form-control espacio"
          placeholder="Dur."
          aria-label="Duracion"
        />
      </div>
      <div className="col-sm-1">
        <a href="#" onClick={() => {props.eliminar(props.id)}}>
          <i style={{color: "gray"}}class="bx bx-trash"></i>
        </a>
      </div>
    </div>
  );
}

import { useState } from "react";

import { Medicamento } from "../../../../components/index";
export default function DoctorCulminarCita(props) {
  const [lista, setLista] = useState(["a"]);

  const agregar = () => {
    const nueva_lista = lista.concat("a");

    setLista(nueva_lista);
  };

  const [currentidx, setCurrentIdx] = useState(1);

  const eliminar = (index) => {
    let nueva_lista = [];
    for (let i = 0; i < lista.length; i++) {
      if (index != i) {
        nueva_lista.push(lista[i]);
      }
    }
    setLista(nueva_lista);
  };

  return (
    <div class="container px-4">
      <div class="row gx-6">
        <div class="col-12 mb-3">
          <div id="bord" class="p-3 border ">
            <h1 className="fs-3">DIAGN&Oacute;STICO</h1>
            <div className="form-floating mb-3">
              <textarea
                className="form-control "
                placeholder="Leave a comment here"
                id="floatingTextarea2"
              ></textarea>
              <label for="floatingTextarea2">
                Introducir diagn&oacute;stico del paciente
              </label>
            </div>
            <h1 className="fs-3">RECETA</h1>
            {lista.length == 0 ? (
              <div>"No hay medicamentos"</div>
            ) : (
              lista.map((e, idx) => {
                return <Medicamento key={idx} id={idx} eliminar={eliminar} />;
              })
            )}
            <div className="d-flex justify-content-center">
              <a
                className="btn btn-outline-primary"
                onClick={agregar}
                style={{ width: "100%" }}
              >
                +
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div id="bord2" className="p-3 border ">
            <h1 className="fs-4">OPCIONAL (PROX.CITA)</h1>
            <div className="list-group">
              <a
                href="#"
                className={
                  currentidx == 1
                    ? "list-group-item list-group-item-action active recuadro"
                    : "list-group-item list-group-item-action recuadro"
                }
                onClick={() => {
                  setCurrentIdx(1);
                }}
                aria-current="true"
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Mes de Mayo</h5>
                </div>
                <p className="mb-1">Fechas no Disponibles</p>
              </a>
              <a
                href="#"
                onClick={() => {
                  setCurrentIdx(2);
                }}
                className={
                  currentidx == 2
                    ? "list-group-item list-group-item-action active recuadro"
                    : "list-group-item list-group-item-action recuadro"
                }
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Mes de Julio</h5>
                </div>
                <p className="mb-1">Fechas Disponibles</p>
              </a>
              <a
                href="#"
                onClick={() => {
                  setCurrentIdx(3);
                }}
                className={
                  currentidx == 3
                    ? "list-group-item list-group-item-action active recuadro"
                    : "list-group-item list-group-item-action recuadro"
                }
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">Mes de Junio</h5>
                </div>
                <p className="mb-1">Fechas Disponibles</p>
              </a>
              <a
                href="#"
                onClick={() => {
                  setCurrentIdx(4);
                }}
                className={
                  currentidx == 4
                    ? "list-group-item list-group-item-action active recuadro"
                    : "list-group-item list-group-item-action recuadro"
                }
              >
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">Mes de Agosto</h5>
                </div>
                <p className="mb-1">Fechas Disponibles</p>
              </a>
            </div>
          </div>
          <a
            type="button"
            className="btn btn-info boton"
            href="../calendario/doctor_calendario.html"
          >
            Finalizar Cita
          </a>
        </div>
      </div>
    </div>
  );
}

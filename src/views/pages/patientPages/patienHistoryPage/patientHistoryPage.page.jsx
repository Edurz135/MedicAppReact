import "./patientHistoryPage.styles.css";

export default function PatientHistoryPage() {
  return (
    <div id="container" className="list-group ">
      <a href="#" className="list-group-item list-group-item-action  recuadro">
        <div className="d-flex w-100 justify-content-between ">
          <h5 className="mb-1 linea">
            Doctor : Juan Miguel Tamayo Villa Diagn&oacutestico :
          </h5>
          <small>
            <b>Fecha : 29/01/22</b>
          </small>
        </div>
        <p className="mb-1 linea">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,
          nisl et suscipit iaculis, magna nisi blandit orci, sed tristique nulla
          dui at purus. Nulla scelerisque efficitur sem, sed cursus mauris
          tempor nec. Morbi varius lectus molestie nisi faucibus, ac semper
          ligula vestibulum. Aenean eget tempor felis, ut consectetur magna.
          Quisque scelerisque nisi sed ullamcorper posuere. Quisque vestibulum
          tempor justo sed interdum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed cursus, nisl et suscipit iaculis, magna nisi
          blandit orci, sed tristique nulla dui at purus. Nulla scelerisque
          efficitur sem, sed cursus mauris tempor nec. Morbi varius lectus
          molestie nisi faucibus, ac semper ligula vestibulum. Aenean eget
          tempor felis, ut consectetur magna. Quisque scelerisque nisi sed
          ullamcorper posuere. Quisque vestibulum tempor justo sed
          interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          cursus, nisl et suscipit iaculis, magna nisi blandit orci, sed
          tristique nulla dui at purus. Nulla scelerisque efficitur sem, sed
          cursus mauris tempor nec. Morbi varius lectus molestie nisi faucibus,
          ac semper ligula vestibulum. Aenean eget tempor felis, ut consectetur
          magna. Quisque scelerisque nisi sed ullamcorper posuere. Quisque
          vestibulum tempor justo sed interdum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed cursus, nisl et suscipit iaculis,
          magna nisi blandit orci, sed tristique nulla dui at purus. Nulla
          scelerisque efficitur sem, sed cursus mauris tempor nec. Morbi varius
          lectus molestie nisi faucibus, ac semper ligula vestibulum. Aenean
          eget tempor felis, ut consectetur magna. Quisque scelerisque nisi sed
          ullamcorper posuere. Quisque vestibulum tempor justo sed interdum.{" "}
        </p>
        <small>
          <b>Medic&iacutenas Recetadas :</b>
          <ul className="list-group lista">
            <li className="list-group-item">
              Paracetamol : C/d 10h (Durante 7d)
            </li>
            <li className="list-group-item">
              Clonacepan : C/d 9h (Durante 5d)
            </li>
            <li className="list-group-item">Antalgina : C/d 2d (Durante 7d)</li>
            <li className="list-group-item">
              Ibuprofeno : C/d 8h (Durante 3d)
            </li>
            <li className="list-group-item">
              Crema Base : Dia y Noche (Durante 1M)
            </li>
          </ul>
          <b>Especialidad : Dermatolog&iacutea</b>
          <button
            type="button"
            className="btn btn-primary boton"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Cita ya calificada"
          >
            Puntuar cita
          </button>
        </small>
      </a>
      <a href="#" className="list-group-item list-group-item-action  recuadro">
        <div className="d-flex w-100 justify-content-between ">
          <h5 className="mb-1 linea">
            Doctor : Cloe Bastida Miranda Diagn&oacutestico :
          </h5>
          <small>
            <b>Fecha : 11/02/22</b>
          </small>
        </div>
        <p className="mb-1 linea">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,
          nisl et suscipit iaculis, magna nisi blandit orci, sed tristique nulla
          dui at purus. Nulla scelerisque efficitur sem, sed cursus mauris
          tempor nec. Morbi varius lectus molestie nisi faucibus, ac semper
          ligula vestibulum. Aenean eget tempor felis, ut consectetur magna.
          Quisque scelerisque nisi sed ullamcorper posuere. Quisque vestibulum
          tempor justo sed interdum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed cursus, nisl et suscipit iaculis, magna nisi
          blandit orci, sed tristique nulla dui at purus. Nulla scelerisque
          efficitur sem, sed cursus mauris tempor nec. Morbi varius lectus
          molestie nisi faucibus, ac semper ligula vestibulum. Aenean eget
          tempor felis, ut consectetur magna. Quisque scelerisque nisi sed
          ullamcorper posuere. Quisque vestibulum tempor justo sed
          interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          cursus, nisl et suscipit iaculis, magna nisi blandit orci, sed
          tristique nulla dui at purus. Nulla scelerisque efficitur sem, sed
          cursus mauris tempor nec. Morbi varius lectus molestie nisi faucibus,
          ac semper ligula vestibulum. Aenean eget tempor felis, ut consectetur
          magna. Quisque scelerisque nisi sed ullamcorper posuere. Quisque
          vestibulum tempor justo sed interdum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed cursus, nisl et suscipit iaculis,
          magna nisi blandit orci, sed tristique nulla dui at purus. Nulla
          scelerisque efficitur sem, sed cursus mauris tempor nec. Morbi varius
          lectus molestie nisi faucibus, ac semper ligula vestibulum. Aenean
          eget tempor felis, ut consectetur magna. Quisque scelerisque nisi sed
          ullamcorper posuere. Quisque vestibulum tempor justo sed interdum.{" "}
        </p>
        <small>
          <b>Medic&iacutenas Recetadas :</b>
          <ul className="list-group lista">
            <li className="list-group-item">
              Paracetamol : C/d 10h (Durante 7d)
            </li>
            <li className="list-group-item">
              Clonacepan : C/d 9h (Durante 5d)
            </li>
            <li className="list-group-item">Antalgina : C/d 2d (Durante 7d)</li>
            <li className="list-group-item">
              Ibuprofeno : C/d 8h (Durante 3d)
            </li>
            <li className="list-group-item">
              Crema Base : Dia y Noche (Durante 1M)
            </li>
          </ul>
          <b>Especialidad : Oftalmolog&iacutea</b>
          <button
            type="button"
            className="btn btn-primary boton"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Cita ya calificada"
          >
            Puntuar cita
          </button>
        </small>
      </a>
      <a href="#" className="list-group-item list-group-item-action  recuadro">
        <div className="d-flex w-100 justify-content-between ">
          <h5 className="mb-1 linea">
            Doctor : H&eacutector Sandoval Fuentes Diagn&oacutestico :
          </h5>
          <small>
            <b>Fecha : 09/03/22</b>
          </small>
        </div>
        <p className="mb-1 linea">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,
          nisl et suscipit iaculis, magna nisi blandit orci, sed tristique nulla
          dui at purus. Nulla scelerisque efficitur sem, sed cursus mauris
          tempor nec. Morbi varius lectus molestie nisi faucibus, ac semper
          ligula vestibulum. Aenean eget tempor felis, ut consectetur magna.
          Quisque scelerisque nisi sed ullamcorper posuere. Quisque vestibulum
          tempor justo sed interdum.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed cursus, nisl et suscipit iaculis, magna nisi
          blandit orci, sed tristique nulla dui at purus. Nulla scelerisque
          efficitur sem, sed cursus mauris tempor nec. Morbi varius lectus
          molestie nisi faucibus, ac semper ligula vestibulum. Aenean eget
          tempor felis, ut consectetur magna. Quisque scelerisque nisi sed
          ullamcorper posuere. Quisque vestibulum tempor justo sed
          interdum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          cursus, nisl et suscipit iaculis, magna nisi blandit orci, sed
          tristique nulla dui at purus. Nulla scelerisque efficitur sem, sed
          cursus mauris tempor nec. Morbi varius lectus molestie nisi faucibus,
          ac semper ligula vestibulum. Aenean eget tempor felis, ut consectetur
          magna. Quisque scelerisque nisi sed ullamcorper posuere. Quisque
          vestibulum tempor justo sed interdum.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed cursus, nisl et suscipit iaculis,
          magna nisi blandit orci, sed tristique nulla dui at purus. Nulla
          scelerisque efficitur sem, sed cursus mauris tempor nec. Morbi varius
          lectus molestie nisi faucibus, ac semper ligula vestibulum. Aenean
          eget tempor felis, ut consectetur magna. Quisque scelerisque nisi sed
          ullamcorper posuere. Quisque vestibulum tempor justo sed interdum.{" "}
        </p>
        <small>
          <b>Medic&iacutenas Recetadas :</b>

          <ul className="list-group lista">
            <li className="list-group-item">
              Paracetamol : C/d 10h (Durante 7d)
            </li>
            <li className="list-group-item">
              Clonacepan : C/d 9h (Durante 5d)
            </li>
            <li className="list-group-item">Antalgina : C/d 2d (Durante 7d)</li>
            <li className="list-group-item">
              Ibuprofeno : C/d 8h (Durante 3d)
            </li>
            <li className="list-group-item">
              Crema Base : Dia y Noche (Durante 1M)
            </li>
          </ul>
          <b>Especialidad : Nutrici&oacuten</b>
          <button
            type="button"
            className="btn btn-primary boton"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Cita ya calificada"
          >
            Puntuar cita
          </button>
        </small>
      </a>
      <a
        href="#"
        className="list-group-item list-group-item-action  recuadro"
      />
      <div className="d-flex w-100 justify-content-between ">
        <h5 className="mb-1 linea">
          Doctor : Andr&eacutes Felipe Valera Castro Diagn&oacutestico :
        </h5>
        <small>
          <b>Fecha : 19/04/22</b>
        </small>
      </div>
      <p clasName="mb-1 linea">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus,
        nisl et suscipit iaculis, magna nisi blandit orci, sed tristique nulla
        dui at purus. Nulla scelerisque efficitur sem, sed cursus mauris tempor
        nec. Morbi varius lectus molestie nisi faucibus, ac semper ligula
        vestibulum. Aenean eget tempor felis, ut consectetur magna. Quisque
        scelerisque nisi sed ullamcorper posuere. Quisque vestibulum tempor
        justo sed interdum.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed cursus, nisl et suscipit iaculis, magna nisi blandit orci, sed
        tristique nulla dui at purus. Nulla scelerisque efficitur sem, sed
        cursus mauris tempor nec. Morbi varius lectus molestie nisi faucibus, ac
        semper ligula vestibulum. Aenean eget tempor felis, ut consectetur
        magna. Quisque scelerisque nisi sed ullamcorper posuere. Quisque
        vestibulum tempor justo sed interdum.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed cursus, nisl et suscipit iaculis, magna
        nisi blandit orci, sed tristique nulla dui at purus. Nulla scelerisque
        efficitur sem, sed cursus mauris tempor nec. Morbi varius lectus
        molestie nisi faucibus, ac semper ligula vestibulum. Aenean eget tempor
        felis, ut consectetur magna. Quisque scelerisque nisi sed ullamcorper
        posuere. Quisque vestibulum tempor justo sed interdum.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed cursus, nisl et suscipit
        iaculis, magna nisi blandit orci, sed tristique nulla dui at purus.
        Nulla scelerisque efficitur sem, sed cursus mauris tempor nec. Morbi
        varius lectus molestie nisi faucibus, ac semper ligula vestibulum.
        Aenean eget tempor felis, ut consectetur magna. Quisque scelerisque nisi
        sed ullamcorper posuere. Quisque vestibulum tempor justo sed interdum.{" "}
      </p>
      <small />
      <b>Medic&iacutenas Recetadas :</b>
      <ul class="list-group lista">
        <li className="list-group-item">Paracetamol : C/d 10h (Durante 7d)</li>
        <li className="list-group-item">Clonacepan : C/d 9h (Durante 5d)</li>
        <li className="list-group-item">Antalgina : C/d 2d (Durante 7d)</li>
      </ul>
      <b>Especialidad : Medic&iacutena General</b>

      <button
        type="button"
        className="btn btn-primary boton"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Puntuar Cita
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Calificar Cita
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div clasNames="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineRadio1">
                  1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  2
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label" for="inlineRadio3">
                  3
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio4"
                  value="option4"
                />
                <label className="form-check-label" for="inlineRadio4">
                  4
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio5"
                  value="option5"
                />
                <label className="form-check-label" for="inlineRadio5">
                  5
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

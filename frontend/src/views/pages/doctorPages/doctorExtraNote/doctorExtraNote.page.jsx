export default function DoctorExtraNote() {
  return (
    <div>
      <div className="row">
        <div className="col-0 col-sm-1"></div>
        <div className="col-12 col-sm-10 pt-2">
          <form>
            <label for="validationTextarea" className="form-label">
              Notas Extras
            </label>
            <input
              type="text"
              className="form-control"
              id="validationServer03"
              placeholder="Título"
              aria-describedby="validationServer03Feedback"
              required
            />
            <label for="validationServer03" className="form-label"></label>
            <textarea
              className="form-control"
              id="validationTextarea"
              placeholder="Información"
              required
            ></textarea>
            <button className="btn btn-primary mt-4 mb-4">Agregar +</button>
          </form>
        </div>
        <div className="col-0 col-sm-1"></div>
      </div>
    </div>
  );
}

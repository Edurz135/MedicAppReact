import { useEffect, useState } from "react";

export default function DoctorExtraNote(props) {
  const [title1, setTitle] = useState("");
  const [content1, setContent] = useState("");
  const [extraNoteData, setExtraNoteData] = useState([]);

  useEffect(() => {
    refreshExtraNotes();
  }, []);

  const createExtraNote = async () => {
    if (content1 == "" || title1 == "") {
      return; 
    }
    await fetch("http://localhost:5000/api/users/createextranote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title1,
        content: content1,
        dateId: props.dateId,
      }),
    });

    setTitle("");
    setContent("");
    refreshExtraNotes();
  };

  const refreshExtraNotes = async () => {
    const extraNoteData = await fetch(
      "http://localhost:5000/api/users/getextranotes?" +
        new URLSearchParams({
          dateId: props.dateId,
        })
    );
    const extraNoteDataContent = await extraNoteData.json();
    setExtraNoteData(extraNoteDataContent.result);
  };

  return (
    <div>
      <div className="row">
        <div className="col-0 col-sm-1"></div>
        <div className="col-12 col-sm-10 pt-2">
          <div>
            <label className="form-label">
              Notas Extras
            </label>
            <input
              type="text"
              className="form-control"
              id="validationServer03"
              placeholder="Título"
              aria-describedby="validationServer03Feedback"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title1}
              required
            />
            <label className="form-label"></label>
            <textarea
              className="form-control"
              id="validationTextarea"
              placeholder="Información"
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content1}
              required
            ></textarea>
            <button
              onClick={createExtraNote}
              className="btn btn-primary mt-4 mb-4"
            >
              Agregar +
            </button>
          </div>
          <hr />
          {extraNoteData.length == 0 ? (
            <div>No hay notas extras.</div>
          ) : (
            extraNoteData.map((extraNote) => {
              return (
                <div className="card m-4" key={extraNote.id}>
                  <div className="card-body">
                    <h5 className="card-title">{extraNote.title}</h5>
                    <p className="card-text">{extraNote.content}</p>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="col-0 col-sm-1"></div>
      </div>
    </div>
  );
}

import Express from "express";
import cors from "cors";

const app = Express();
const port = 5000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("1er endpoint");
});

app.get("/alumno/:codigo/:nombre", (req, res) => {
  const codigo = req.params.codigo;
  const nombreAlumno = req.params.nombre;
  console.log("ALUMNO1");
  console.log(codigo);
  console.log(nombreAlumno);
  res.send("Retornar <h1> Alumno1");
});

app.get("/alumno2/", (req, res) => {
  const codigo = req.query.codigo;
  const nombre = req.query.nombre;
  console.log("ALUMNO2");
  console.log(codigo);
  console.log(nombreAlumno);
  res.send("Retornar <h1> Alumno2");
});

app.listen(port, () => {
  console.log("Servidor iniciado");
});

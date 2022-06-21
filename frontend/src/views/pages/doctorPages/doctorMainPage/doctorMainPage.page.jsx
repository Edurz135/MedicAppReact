import "./doctorMainPage.styles.css"

export default function DoctorMainPage() {
  return (
    <div>
      <div class="content-header">
        <div class="content-info">
          <p>Bienvenido</p>
          <h1>Nombre del doctor</h1>
        </div>
      </div>
      <div>
        <p>
          Esta es su página de inicio, parece que están solicitando más citas,
          para ello dirígase a la sección <b>Próximas citas</b>. Suerte!
        </p>
      </div>
    </div>
  );
}

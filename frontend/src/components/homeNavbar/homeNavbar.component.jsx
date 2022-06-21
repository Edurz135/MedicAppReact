export default function HomeNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MedicApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="../../pages/mainPages/recomendacion/recomendacion.html"
              >
                Recomendaciones
              </a>
            </li>
          </ul>
          <a
            href="../../pages/mainPages/login/Login.html"
            className="btn btn-outline-info me-2"
            type="submit"
          >
            {" "}
            SignIn{" "}
          </a>
          <a
            href="../../pages/mainPages/register/MainRegistro.html"
            className="btn btn-info"
            type="submit"
          >
            SignUp
          </a>
        </div>
      </div>
    </nav>
  );
}

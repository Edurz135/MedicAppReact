export default function SideNavbarHeader(props) {
  return (
    <header className={props.isNavOpen ? "header body-pd" : "header"} id="header">
      <div className="header_toggle">
        <i
          className={props.isNavOpen ? "bx bx-menu bx-x" : "bx bx-menu"}
          id="header-toggle"
          onClick={() => {
            props.setIsNavOpen(!props.isNavOpen);
            setTimeout(() => {}, 500);
          }}
        ></i>
      </div>
      <div className="header_img">
        <a href="../../pages/doctorPages/perfil/doctor_perfil.html">
          <i className="bx bxs-user-circle bx-md"></i>
        </a>
      </div>
    </header>
  );
}

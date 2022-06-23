import { useNavigate } from "react-router-dom";
import "./sideNavbar.styles.css";
export default function SideNavbar(props) {
  const navigate = useNavigate();
  return (
    <div
      className={props.isNavOpen ? "l-navbar side_nav_show" : "l-navbar"}
      id="nav-bar"
    >
      <nav className="side_nav">
        <div>
          <a href="../mainLayout/index.html" className="nav_logo side_nav_a">
            <i className="bx bx-plus-medical nav_logo-icon"></i>
            <span className="nav_logo-name">MedicApp</span>
          </a>
          <div className="nav_list">
            {props.tabsData.map((tab) => {
              return (
                <a
                  key={tab.index}
                  className={
                    tab.index == props.currentTabIndex
                      ? "nav_link tab_active side_nav_a"
                      : "nav_link side_nav_a"
                  }
                  onClick={() => {
                    props.setCurrentTabIndex(tab.index);
                    let url = props.tabsData[tab.index].url;
                    navigate(`${url}`);
                  }}
                >
                  <i className={`bx ${tab.icon} nav_icon`}></i>
                  <span className="nav_name">{tab.title}</span>
                </a>
              );
            })}
          </div>
        </div>
        <a
          onClick={() => {
            navigate("/home/");
          }}
          className="nav_link side_nav_a"
        >
          <i className="bx bx-log-out nav_icon"></i>
          <span className="nav_name">Cerrar sesión</span>
        </a>
      </nav>
    </div>
  );
}

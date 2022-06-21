import React from "react";
import { DoctorMainPage, DoctorCalendaryPage } from "../../../pages";
import { useState } from "react";
import "./doctor.styles.css"
export default function DoctorLayout() {
  const tabsData = [
    {
      index: 0,
      title: "Inicio",
      icon: "bx-home",
      component: <DoctorMainPage />,
    },
    {
      index: 1,
      title: "Próximas citas",
      icon: "bx-globe",
      component: <div>inicio2</div>,
    },
    {
      index: 2,
      title: "Calendario de citas",
      icon: "bx-calendar",
      component: <DoctorCalendaryPage />,
    },
    {
      index: 3,
      title: "Historial de citas",
      icon: "bx-history",
      component: <div>inicio3</div>,
    },
    {
      index: 4,
      title: "Preguntas privadas",
      icon: "bx-question-mark",
      component: <div>inicio3</div>,
    },
    {
      index: 5,
      title: "Preguntas públicas",
      icon: "bx-question-mark",
      component: <div>inicio3</div>,
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className={isNavOpen ? "body body-pd" : "body"}>
      <header className={isNavOpen ? "header body-pd" : "header"} id="header">
        <div className="header_toggle">
          <i
            className={isNavOpen ? "bx bx-menu bx-x" : "bx bx-menu"}
            id="header-toggle"
            onClick={() => {
              setIsNavOpen(!isNavOpen);
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
      <div className={isNavOpen ? "l-navbar show" : "l-navbar"} id="nav-bar">
        <nav className="nav">
          <div>
            <a href="../mainLayout/index.html" className="nav_logo">
              <i className="bx bx-plus-medical nav_logo-icon"></i>
              <span className="nav_logo-name">MedicApp</span>
            </a>
            <div className="nav_list">
              {tabsData.map((tab) => {
                return (
                  <a
                    key={tab.index}
                    className={
                      tab.index == currentTabIndex
                        ? "nav_link active"
                        : "nav_link"
                    }
                    onClick={() => {
                      setCurrentTabIndex(tab.index);
                    }}
                  >
                    <i className={`bx ${tab.icon} nav_icon`}></i>
                    <span className="nav_name">{tab.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
          <a href="../mainLayout/index.html" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">Cerrar sesión</span>
          </a>
        </nav>
      </div>
      <div className="content-container">
        {React.cloneElement(tabsData[2].component, {isNavOpen: isNavOpen})}
        {/* {tabsData[currentTabIndex].component} */}
      </div>
    </div>
  );
}

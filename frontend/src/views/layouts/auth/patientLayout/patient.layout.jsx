import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { PatientMainPage } from "../../../pages";
import { SideNavbar, SideNavbarHeader } from "../../../../components";

import "./patient.styles.css";

export default function PatientLayout() {
  const tabsData = [
    {
      index: 0,
      title: "Inicio",
      icon: "bx-home",
      component: <PatientMainPage />,
      url: "home/",
    },
    {
      index: 1,
      title: "Mis citas",
      icon: "bx-globe",
      component: <div>paciente mis citas</div>,
      url: "mydates/",
    },
    {
      index: 2,
      title: "Historial de citas",
      icon: "bx-history",
      component: <div>paciente historial</div>,
      url: "history/",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className={isNavOpen ? "body body-pd" : "body"}>
      <SideNavbarHeader isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <SideNavbar
        isNavOpen={isNavOpen}
        tabsData={tabsData}
        currentTabIndex={currentTabIndex}
        setCurrentTabIndex={setCurrentTabIndex}
      />
      <Routes>
        <Route
          path={`/${tabsData[currentTabIndex].url}`}
          element={React.cloneElement(tabsData[currentTabIndex].component, {
            isNavOpen: isNavOpen,
          })}
        />
        <Route path="/*" element={<div>este link no tiene pagina</div>} />
      </Routes>
    </div>
  );
}

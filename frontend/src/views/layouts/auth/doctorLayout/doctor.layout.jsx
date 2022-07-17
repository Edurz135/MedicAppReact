import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import {
  DoctorMainPage,
  DoctorCalendaryPage,
  DoctorNextDatesPage,
  DoctorHistoryPage,
  DoctorPrivateQuestionPage,
  DoctorPublicQuestionPage,
} from "../../../pages";

import { SideNavbar, SideNavbarHeader } from "../../../../components";

export default function DoctorLayout() {
  const tabsData = [
    {
      index: 0,
      title: "Inicio",
      icon: "bx-home",
      component: <DoctorMainPage />,
      url: "home/",
    },
    {
      index: 1,
      title: "Próximas citas",
      icon: "bx-globe",
      component: <DoctorNextDatesPage />,
      url: "nextdates/",
    },
    {
      index: 2,
      title: "Calendario de citas",
      icon: "bx-calendar",
      component: <DoctorCalendaryPage />,
      url: "calendary/",
    },
    {
      index: 3,
      title: "Historial de citas",
      icon: "bx-history",
      component: <DoctorHistoryPage />,
      url: "history/",
    },
    {
      index: 4,
      title: "Preguntas privadas",
      icon: "bx-question-mark",
      component: <DoctorPrivateQuestionPage />,
      url: "privatequestions/",
    },
    {
      index: 5,
      title: "Preguntas públicas",
      icon: "bx-question-mark",
      component: <DoctorPublicQuestionPage />,
      url: "publicquestions/",
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
          path="/"
          element={React.cloneElement(tabsData[0].component, {
            isNavOpen: isNavOpen,
          })}
        />
        {tabsData.map((tab) => {
          return (
            <Route
              path={`/${tab.url}`}
              element={React.cloneElement(tab.component, {
                isNavOpen: isNavOpen,
                setCurrentTabIndex: setCurrentTabIndex,
                data: tab,
              })}
              key={tab.index}
            />
          );
        })}
        <Route path="/*" element={<div>este link no tiene pagina</div>} />
      </Routes>
    </div>
  );
}

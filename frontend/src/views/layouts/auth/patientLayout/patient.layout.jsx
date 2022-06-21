import { PatientMainPage } from "../../../pages";

export default function PatientLayout() {
  const tabsData = [
    {
      index: 0,
      title: "Inicio",
      icon: "bx-home",
      component: <PatientMainPage />,
    },
    {
      index: 1,
      title: "Mis citas",
      icon: "bx-globe",
      component: <div>inicio2</div>,
    },
    {
      index: 2,
      title: "Historial de citas",
      icon: "bx-history",
      component: <div>inicio3</div>,
    },
  ];

  return (
    <div>
      {/* <SideNavbar tabsData={tabsData} /> */}
    </div>
  );
}

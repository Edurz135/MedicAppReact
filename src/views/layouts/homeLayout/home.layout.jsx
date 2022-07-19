import { Routes, Route } from "react-router-dom";
import { HomeNavbar } from "../../../components";

import { MainPage, LoginPage, SelectRegisterPage, RegisterPatientPage, RegisterDoctorPage } from "../../pages/";

export default function HomeLayout() {
  return (
    <div>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/selectRegister" element={<SelectRegisterPage />} />
        <Route path="/doctorregister" element={<RegisterDoctorPage/>} />
        <Route path="/patientregister" element={<RegisterPatientPage/>} />
        <Route path="/*" element={<div>este link no tiene pagina</div>} />
      </Routes>
    </div>
  );
}

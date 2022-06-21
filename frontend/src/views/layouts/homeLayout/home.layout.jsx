import { Routes, Route } from "react-router-dom";
import { HomeNavbar } from "../../../components";

import { MainPage, LoginPage, SelectRegisterPage, RegisterPage } from "../../pages/";

export default function HomeLayout() {
  return (
    <div>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/selectRegister" element={<SelectRegisterPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/*" element={<div>este link no tiene pagina</div>} />
      </Routes>
    </div>
  );
}

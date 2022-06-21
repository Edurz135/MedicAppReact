import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PatientLayout, DoctorLayout, HomeLayout } from "./views/layouts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={<HomeLayout/>} />
        <Route path="/auth/doctor/*" element={<DoctorLayout/>} />
        <Route path="/auth/patient/*" element={<PatientLayout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

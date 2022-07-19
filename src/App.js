import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PatientLayout, DoctorLayout, HomeLayout } from "./views/layouts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={<HomeLayout />} />
        <Route path="/auth/doctor/*" element={<DoctorLayout />} />
        <Route path="/auth/patient/*" element={<PatientLayout />} />
        <Route path="*" element={<Navigate to="/home/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

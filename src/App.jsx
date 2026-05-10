import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Resident from "./pages/Resident";
import Complaint from "./pages/Complaint";
import Notice from "./pages/Notice";
import Parking from "./pages/Parking";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/resident" element={<Resident />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/parking" element={<Parking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

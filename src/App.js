import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AdminDashboard from "./components/AdminDashboard";
import HastaDashboard from "./components/HastaDashboard";
import DoktorDashboard from "./components/DoktorDashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/hasta-dashboard" element={<HastaDashboard />} />
          <Route path="/doktor-dashboard" element={<DoktorDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


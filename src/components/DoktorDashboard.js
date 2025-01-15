import React from "react";
import { useNavigate } from "react-router-dom";

const DoktorDashboard = () => {
  const navigate = useNavigate();

  // Yönlendirme işlemleri
  const goToLogin = () => {
    navigate("/doktor-login"); // Doktor Giriş Sayfası
  };

  const goToRegister = () => {
    navigate("/doktor-register"); // Doktor Üyelik Sayfası
  };

  return (
    <div>
      <h2>Doktor Dashboard</h2>
      <button onClick={goToLogin}>Giriş Yap</button>
      <button onClick={goToRegister}>Üye Ol</button>
    </div>
  );
};

export default DoktorDashboard;

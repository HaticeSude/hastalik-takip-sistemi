import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Yönlendirme işlemleri
  const goToLogin = () => {
    navigate("/admin-login"); // Admin Giriş Sayfası
  };

  const goToRegister = () => {
    navigate("/admin-register"); // Admin Üyelik Sayfası
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={goToLogin}>Giriş Yap</button>
      <button onClick={goToRegister}>Üye Ol</button>
    </div>
  );
};

export default AdminDashboard;

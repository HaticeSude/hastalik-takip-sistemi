import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useHistory yerine useNavigate

const LoginPage = () => {
  const [role, setRole] = useState(""); // Kullanıcı rolü
  const navigate = useNavigate(); // Yönlendirme işlemi için

  const handleLogin = (e) => {
    e.preventDefault();
    // Seçilen role göre yönlendirme işlemi
    if (role === "hasta") {
      navigate("/hasta-dashboard"); // Hasta sayfasına yönlendirme
    } else if (role === "doktor") {
      navigate("/doktor-dashboard"); // Doktor sayfasına yönlendirme
    } else if (role === "admin") {
      navigate("/admin-dashboard"); // Admin sayfasına yönlendirme
    }
  };

  return (
    <div>
      <h2>Giriş Yapın</h2>
      <form onSubmit={handleLogin}>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Kullanıcı Türü Seçin</option>
          <option value="hasta">Hasta</option>
          <option value="doktor">Doktor</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;

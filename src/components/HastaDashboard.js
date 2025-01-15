import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HastaDashboard = () => {
  const [tc, setTc] = useState("");
  const [adSoyad, setAdSoyad] = useState("");
  const [telNo, setTelNo] = useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Formu gönderme işlemi burada yapılacak, örneğin:
    console.log("Form verileri:", { tc, adSoyad, telNo, email, sifre });
    // Form verilerini API'ye gönderme vb. işlemler yapılabilir

    // Kaydı tamamladıktan sonra, başka bir sayfaya yönlendirme:
    navigate("/hasta-dashboard"); // Veya istediğiniz başka bir sayfaya yönlendirebilirsiniz.
  };

  return (
    <div>
      <h2>Hasta Üyelik Bilgileri</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>TC</label>
          <input
            type="text"
            value={tc}
            onChange={(e) => setTc(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Ad/Soyad</label>
          <input
            type="text"
            value={adSoyad}
            onChange={(e) => setAdSoyad(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefon Numarası</label>
          <input
            type="tel"
            value={telNo}
            onChange={(e) => setTelNo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Şifre</label>
          <input
            type="password"
            value={sifre}
            onChange={(e) => setSifre(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kaydı Tamamla</button>
      </form>
    </div>
  );
};

export default HastaDashboard;

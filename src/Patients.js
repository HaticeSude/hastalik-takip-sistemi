import React, { useState, useEffect } from 'react';

function Patients() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:1337/api/hastalars')
            .then((res) => res.json())
            .then((data) => {
                setPatients(data.data);
            })
            .catch((err) => {
                console.error("API çağrısında hata:", err);
            });
    }, []);

    return (
        <div>
            <h1>Hastalar Listesi</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        {patient.ad} {patient.soyad} - {patient.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Patients;

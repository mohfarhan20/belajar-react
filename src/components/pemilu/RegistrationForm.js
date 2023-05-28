import React, { useState } from 'react';
import './pemilu.css'
function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Kirim data pendaftaran ke server
    // Misalnya, menggunakan Axios atau fetch API
    // Tambahkan logika yang sesuai di sini
  };

  return (
    <section>
      <h2>Pendaftaran</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nama lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Daftar</button>
      </form>
    </section>
  );
}

export default RegistrationForm;

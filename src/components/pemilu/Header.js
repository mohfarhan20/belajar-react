import React from 'react';
import './pemilu.css'
import logo from '../img/logo-kpu.png'; // Tentukan jalur yang benar ke gambar logo

function Header() {
  return (
    <header>
      {/* Tambahkan judul atau logo pemilihan umum */}
      <img className="logo"src={logo} alt="Logo KPU" /> {/* Tambahkan gambar logo */}
      <h1 className='header-title'>Pemilihan Umum</h1>
    </header>
  );
}

export default Header;

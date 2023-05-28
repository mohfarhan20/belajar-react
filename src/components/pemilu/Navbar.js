import React from 'react';
import './pemilu.css'
function Navbar() {
  return (
    <nav>
      {/* Tambahkan menu navigasi */}
      <ul>
        <li>
          <a href="#candidates">Kandidat</a>
        </li>
        <li>
          <a href="#schedule">Jadwal</a>
        </li>
        <li>
          <a href="#instructions">Petunjuk</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

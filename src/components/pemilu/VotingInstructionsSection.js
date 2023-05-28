import React from 'react';
import './pemilu.css'
function VotingInstructionsSection() {
  return (

    <section id="instructions">
      {/* Tampilkan petunjuk memilih */}
      <h2>Petunjuk Pemilih</h2>
      <p>
        Selamat datang di halaman pemilihan umum. Berikut adalah petunjuk untuk memastikan Anda dapat memberikan suara dengan benar:
      </p>
      <ol>
        <li>Pastikan Anda telah terdaftar sebagai pemilih yang memenuhi syarat.</li>
        <li>Silakan bawa kartu identitas resmi yang sah ke tempat pemungutan suara.</li>
        <li>Ikuti petunjuk petugas di tempat pemungutan suara untuk proses pemilihan.</li>
        <li>Pilih kandidat yang Anda anggap paling sesuai dengan visi dan misi Anda.</li>
        <li>Setelah memilih, pastikan suara Anda tercatat dengan benar.</li>
        <li>Setelah selesai, serahkan surat suara ke petugas pemilihan.</li>
        <li>Ingatlah bahwa setiap suara sangat berarti dan dapat mempengaruhi masa depan.</li>
      </ol>
      {/* Tambahkan informasi petunjuk memilih */}
    </section>
  );
}

export default VotingInstructionsSection;

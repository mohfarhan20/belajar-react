import{React,useState,useEffect} from 'react';
import './pemilu.css'
import f_kandidat1 from '../img/kandidat1.jpg';
import f_kandidat2 from '../img/PSA04958.jpg';
import logo from '../img/logo-kpu.png'
import {Chart,BarController,LinearScale,CategoryScale} from 'chart.js';

Chart.register(LinearScale);
Chart.register(BarController);
Chart.register(CategoryScale);


function CandidateSection() {
  // Data kandidat
  const [candidates, setCandidates] = useState([
    { name: 'Kandidat 1', image: {logo}, vision: 'Membangun Masyarakat yang Inklusif dan Berkelanjutan',
    mission: [
        'Meningkatkan aksesibilitas dan kesetaraan bagi semua anggota masyarakat, tanpa memandang latar belakang mereka.',
        'Mengembangkan kebijakan yang mendukung pertumbuhan ekonomi yang berkelanjutan dan ramah lingkungan.',
        'Memperkuat sektor pendidikan dan kesehatan untuk memastikan kualitas hidup yang lebih baik bagi semua warga.'
      ],votes: 0,
},
    { name: 'Kandidat 2', image: {f_kandidat2}, vision: 'Inovasi dan Kemajuan untuk Masa Depan yang Lebih Baik',
    mission: [
        'Mendorong penelitian dan pengembangan teknologi yang inovatif untuk mengatasi tantangan masa depan.',
        'Memperkuat sektor industri dan usaha kecil menengah untuk menciptakan lapangan kerja dan mendorong pertumbuhan ekonomi.',
        'Meningkatkan akses dan kualitas pendidikan untuk mempersiapkan generasi mendatang dalam menghadapi perubahan global.'
      ],votes: 0,
    }

]);
// use state 
const [selectedCandidate, setSelectedCandidate] = useState(null);
const handleSelectCandidate = (candidate) => {
    setSelectedCandidate(candidate);
  };
//   const handleVote = (index) => {
//     const updatedCandidates = [...candidates];
//     updatedCandidates[index].votes += 1;
//     setCandidates(updatedCandidates);
//   };
const handleVote = () => {
    if (selectedCandidate !== null) {
      const updatedCandidates = [...candidates];
      const candidateIndex = candidates.findIndex(candidate => candidate.name === selectedCandidate.name);
      if (candidateIndex !== -1) {
        updatedCandidates[candidateIndex].votes++;
        setSelectedCandidate(null);
        setCandidates(updatedCandidates);
      }
    }
  };
// use effect
// useEffect(() => {
//     // Create chart
//     const ctx = document.getElementById('chart').getContext('2d');
//     new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: candidates.map((candidate) => candidate.name),
//         datasets: [
//           {
//             label: 'Jumlah Pemilih',
//             data: candidates.map((candidate) => candidate.votes),
//             backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
//             borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
//             borderWidth: 1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true,
//             stepSize: 1,
//           },
//         },
//       },
//     });
//   }, [candidates]);

    

  return (
    <section id="candidates">
      {/* Tampilkan daftar kandidat */}
      {candidates.map((candidate, index) => (
        <div key={index}>
          <h2>{candidate.name}</h2>
          <p>Vote Count: {candidate.votes}</p>
          <img src={f_kandidat2} alt={candidate.name}/>
          <p>VISI : {candidate.vision}</p>
          <p> MISI : </p>
          <ul>
            {candidate.mission.map((mission, index) => (
              <li key={index}>{mission}</li>
            ))}
          </ul>
          <button className="my-button" onClick={() => handleSelectCandidate(candidate)}>Reset </button>
          {/* <button onClick={() => handleVote(index)}>Vote</button> */}
        <button className="my-button" onClick={handleVote} disabled={selectedCandidate === null}>
        Vote
      </button>


        </div>
      ))}
   {selectedCandidate && (
        <p>Kandidat terpilih: {selectedCandidate.name}</p>
      )}
      {/* Tampilkan grafik jumlah pemilih */}
      {/* <canvas id="chart" width="400" height="200"></canvas> */}
    </section>
  );
}


export default CandidateSection;

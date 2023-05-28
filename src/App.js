import React from 'react';
import Header from './components/pemilu/Header';
import Navbar from './components/pemilu/Navbar';
import CandidateSection from './components/pemilu/CandidateSection';
import ScheduleSection from './components/pemilu/ScheduleSection';
import RegistrationForm from './components/pemilu/RegistrationForm';
import VotingInstructionsSection from './components/pemilu/VotingInstructionsSection';
function App() {
    return (
      <div className="container">
        <Header />
        <Navbar />
  
        <main>
          <CandidateSection />
          <ScheduleSection />
          <VotingInstructionsSection />
          <RegistrationForm />
        </main>
  
        <footer>
          {/* Tambahkan konten footer jika diperlukan */}
        </footer>
      </div>
    );
  }
  
  export default App;



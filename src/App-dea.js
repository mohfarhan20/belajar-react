import logo from './logo.svg';
import './App.css';
import Heading from './components/heading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mybutton from './components/Mybutton';
import React,{ useState } from 'react';
import Tweet from './components/Tweet';

function App() {

  const isClickButton = ()=>{
    after("after click");
  }
  const [before,after] = useState("");
  
  const WelcomeMessage = ' Selamat Datang User';
  const FooterText = 'Copyright © 2023 El-Mafia'

  return (
    <div className="App">
    <Heading WelcomeMessage = {WelcomeMessage}/>
    <Navbar/>
    <Mybutton isClickButton = {isClickButton}/>
    <Footer FooterText = {FooterText}/>
    <Tweet cek = {before}/>
    
    
    </div>
  );
}

export default App;

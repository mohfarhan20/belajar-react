import logo from './logo.svg';
import './App.css';
import Heading from './components/heading';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Mybutton from './components/Mybutton';

function App() {

  const isClickButton = ()=>{
    return alert("Button clicked");
  }
  const WelcomeMessage = ' Selamat Datang User';
  const FooterText = 'Copyright © 2023 El-Mafia'

  return (
    <div className="App">
    <Heading WelcomeMessage = {WelcomeMessage}/>
    <Navbar/>
    <Mybutton isClickButton = {isClickButton}/>
    <Footer FooterText = {FooterText}/>
    
    </div>
  );
}

export default App;

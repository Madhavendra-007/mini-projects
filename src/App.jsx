import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"; 
import MiniProjects from './Components/MiniProjects';
import MobileNavigationMenu from './Components/MobileNavigationMenu';

function App() {

  return (
    <>
      
        <Navbar /> {/* Navbar */}
        
         <MiniProjects />
        
        <MobileNavigationMenu />
        <Footer />  {/* Footer */}
      
     
    </>
  )
}

export default App

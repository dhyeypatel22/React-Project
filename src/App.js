import React from 'react'; 
import Footer from './Component/Footer';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Projects from './Component/Projects';
import Details from './Component/Details';
import Contact from './Component/Contact';
import Admin from './Component/Admin';
import Signup from './Component/Signup';
import CreateAcc from './Component/CreateAcc';
import Video from './Component/Video';




function App() {
  return (
    <>
    <BrowserRouter >
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Hero />} />
    
    <Route exact path="/projects" element={<Projects />} />
    
    <Route exact path="/details" element={<Details />} />
    
    <Route exact path="/contact" element={<Contact />} />
   
    <Route exact path="/admin" element={<Admin />} />
    
    <Route path="/signup" element={<Signup />} />
    
    <Route path="/create" element={<CreateAcc />} />
    
    <Route path="/video" element={<Video />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

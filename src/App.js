import React from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import HireMe from './components/HireMe';
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/projects" element={<Projects />} exact></Route>
        <Route path="/about" element={<About />} exact></Route>
        <Route path="/contact" element={<Contact />} exact></Route>
        <Route path="/hireme" element={<HireMe />} exact></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About'; // <-- NEW IMPORT
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    // Use flex-column to push footer to bottom
    <div className="d-flex flex-column min-vh-100">
      <NavbarComponent />
      
      {/* Main content area */}
      <Container className="py-5 mt-5 flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      
      <Footer />
    </div>
  );
}

export default App;
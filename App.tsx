import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import AboutPage from './components/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';

function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

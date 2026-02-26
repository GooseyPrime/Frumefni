import React from 'react';
import SolarCoronaBackground from './components/SolarCoronaBackground';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Culture from './components/Culture';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <SolarCoronaBackground />
      <Hero />
      <About />
      <Experience />
      <Culture />
      <Footer />
    </div>
  );
}

export default App;

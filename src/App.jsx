import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SolarCoronaBackground from './components/SolarCoronaBackground';
import Home from './components/Home';
import Support from './components/Support';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <SolarCoronaBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Gallery category="all" />} />
            <Route path="/members" element={<Gallery category="members" />} />
            <Route path="/astralPairings" element={<Gallery category="astralPairings" />} />
            <Route path="/pairingCustoms" element={<Gallery category="pairingCustoms" />} />
            <Route path="/singles" element={<Gallery category="singles" />} />
            <Route path="/pairingGifs" element={<Gallery category="pairingGifs" />} />
            <Route path="/singleGifs" element={<Gallery category="singleGifs" />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
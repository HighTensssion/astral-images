import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Astral Images</Link>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={mobileMenuOpen ? 'open' : ''}>
          <ul>
            <li><Link to="/" className={isActive('/')} onClick={() => setMobileMenuOpen(false)}>All</Link></li>
            <li><Link to="/members" className={isActive('/members')} onClick={() => setMobileMenuOpen(false)}>Astral Singles</Link></li>
            <li><Link to="/astralPairings" className={isActive('/astralPairings')} onClick={() => setMobileMenuOpen(false)}>Astral Pairings</Link></li>
            <li><Link to="/pairingCustoms" className={isActive('/pairingCustoms')} onClick={() => setMobileMenuOpen(false)}>Custom Pairings</Link></li>
            <li><Link to="/singles" className={isActive('/singles')} onClick={() => setMobileMenuOpen(false)}>Custom Singles</Link></li>
            <li><Link to="/pairingGifs" className={isActive('/pairingGifs')} onClick={() => setMobileMenuOpen(false)}>Custom Pairing GIFs</Link></li>
            <li><Link to="/singleGifs" className={isActive('/singleGifs')} onClick={() => setMobileMenuOpen(false)}>Custom Single GIFs</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
// src/components/MobileMenu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Styles.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mobile-menu">
      <button className="menu-toggle" onClick={toggleMenu}>
        &#9776;
      </button>
      <nav className={`menu-items ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Inicio</Link>
        <Link to="/about" onClick={toggleMenu}>Sobre Nosotros</Link>
        <Link to="/services" onClick={toggleMenu}>Servicios</Link>
        <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
        <Link to="/login" onClick={toggleMenu}>Iniciar Sesión</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;

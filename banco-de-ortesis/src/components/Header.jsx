// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Styles.css';


const Header = () => {
  return (
    <header className="header">
      <nav className="container">
        <Link to="/">Banco de Ortesis</Link>
        <div className="auth-links">
          <Link to="/login">Iniciar Sesión</Link>
          <Link to="/register">Registrarse</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

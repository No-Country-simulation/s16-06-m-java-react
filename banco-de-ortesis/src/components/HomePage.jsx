// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Styles.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Banco de Ortesis</h1>
      <p>Bienvenido a la red solidaria de equipamiento ortopédico.</p>
      <div className="links">
        <Link to="/login" className="login-link">Iniciar Sesión</Link>
        <Link to="/register" className="register-link">Registrarse</Link>
      </div>
    </div>
  );
};

export default HomePage;

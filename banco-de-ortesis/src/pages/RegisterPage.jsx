// src/pages/Register.jsx
import '../styles/Styles.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const Register = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleTermsChange = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!acceptedTerms) {
      alert('Debes aceptar los términos y condiciones para registrarte.');
      return;
    }
    // Aquí iría el código para manejar el registro
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
          <div className="terms-container">
            <input
              type="checkbox"
              id="terms"
              checked={acceptedTerms}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms">
              <a href="#" onClick={() => setShowModal(true)}>Acepto los términos y condiciones</a>
            </label>
          </div>
          <button type="submit"  disabled={!acceptedTerms}>Registrarse</button>
        </form>
        <div className="login-link">
          <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
        </div>
      <Modal show={showModal} onClose={handleModalClose}>
        <div className="purpose-terms-container">
          <h2>Propósito de la Página</h2>
          <p>
            El propósito de esta página es crear una red solidaria para facilitar el acceso a equipamiento ortopédico y fomentar la colaboración comunitaria.
          </p>
          <h3>Términos y Condiciones</h3>
          <p>
            Al utilizar esta página, usted acepta los siguientes términos y condiciones:
          </p>
          <ul>
            <li>No se permite la venta de artículos robados o de procedencia dudosa.</li>
            <li>Todos los artículos deben estar en buen estado y ser funcionales.</li>
            <li>El uso de esta plataforma es para fines solidarios y no comerciales.</li>
            <li>La plataforma no se hace responsable por transacciones entre usuarios.</li>
          </ul>
        </div>
      </Modal>
    </div>     </div>
  );
};

export default Register;

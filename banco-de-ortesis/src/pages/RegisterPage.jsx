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
      <div className="profile-header">
        <div className="profile-pic">Logo</div>
      </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="name">Apellido</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
          <button type="button" className="register-button" disabled={!acceptedTerms}>Registrarme</button>
          <div className="continue-without-registering">
          <label htmlFor="terms">
            <a href="#" className="continue-link" onClick={() => navigate('/Home')}>
              Continuar sin registrarme
            </a>
          </label>
        </div>
        </form>
    </div>     </div>
  );
};

export default Register;

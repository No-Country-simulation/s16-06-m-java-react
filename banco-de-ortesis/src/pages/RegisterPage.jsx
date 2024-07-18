import '../styles/Styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { register, loading, error } = useRegister();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await register(formData);
      navigate('/profile');
    } catch (error) {
      alert('Error al registrarse');
    }
  };

  return (
    <div className="register-container">
      <div className="register-form">
        <div className="profile-header">
          <div className="profile-pic">Logo</div>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="lastName">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="register-button" disabled={loading}>
            {loading ? 'Registrando...' : 'Registrarme'}
          </button>
          {error && <p className="error-message">{error}</p>}
          <div className="continue-without-registering">
            <label htmlFor="terms">
              <a href="#" className="continue-link" onClick={() => navigate('/home')}>
                Continuar sin registrarme
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

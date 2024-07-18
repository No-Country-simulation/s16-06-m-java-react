// src/pages/Login.jsx
import '../styles/Styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/AuthService';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      const data = await loginUser(user);
      localStorage.setItem('token', data.token);
      handleLogin();
      navigate('/profile');
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  if (showOnboarding) {
    return <Onboarding onFinish={() => navigate('/')} />;
  }

  return (
    <div className="login-container">
      <div className="profile-header">
        <div className="profile-pic">Logo</div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="login-button">Iniciar Sesión</button>
        <button type="button" className="register-button" onClick={() => navigate('/register')}>Registrarme</button>
        <div className="continue-without-registering">
          <label htmlFor="terms">
            <a href="#" className="continue-link" onClick={() => navigate('/home')}>
              Continuar sin registrarme
            </a>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;


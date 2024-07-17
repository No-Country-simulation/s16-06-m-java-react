import '../styles/Styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { email, password };
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        handleLogin();
        navigate('/profile');
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

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
            <a href="#" className="continue-link" onClick={() => navigate('/Home')}>
              Continuar sin registrarme
            </a>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Login;

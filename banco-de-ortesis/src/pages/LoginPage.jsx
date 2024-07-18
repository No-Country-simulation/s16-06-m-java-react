import '../styles/Styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { email, password };

    try {
      await login(user);
      handleLogin();
      navigate('/profile');
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <div className="profile-header">
        <div className="profile-pic">Logo</div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>
        {error && <p className="error-message">{error}</p>}
        <button type="button" className="register-button" onClick={() => navigate('/register')}>
          Registrarme
        </button>
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

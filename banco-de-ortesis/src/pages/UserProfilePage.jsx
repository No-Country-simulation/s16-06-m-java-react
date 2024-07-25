// src/pages/UserProfilePage.jsx
import '../styles/Styles.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../services/AuthService';

const UserProfilePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-pic">Foto perfil</div>
        <div className="profile-name">Nombre usuario</div>
      </div>
      <div className="profile-options">
        <div>Mis Productos</div>
        <div>Valoraciones</div>
        <div>Mensajes</div>
        <div>Configuración</div>
        <div>Privacidad</div>
        <div>Ayuda</div>
      </div>
      <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default UserProfilePage;

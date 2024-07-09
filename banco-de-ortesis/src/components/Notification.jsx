// src/components/Notification.jsx
import React from 'react';
import '../styles/Styles.css';

const Notification = ({ message }) => {
  return (
    <div className="notification">
      {message}
    </div>
  );
};

export default Notification;

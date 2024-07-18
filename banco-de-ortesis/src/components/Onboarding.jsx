// src/components/Onboarding.jsx
import '../styles/Styles.css';// src/components/Onboarding.jsx
import React, { useState } from 'react';

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert('Onboarding completado');
    }
  };

  const getButtonText = () => {
    if (step < 3) {
      return 'Siguiente';
    }
    return 'Finalizar';
  };

  return (
    <div className="onboarding-container">
      {step === 1 && (
        <div className="onboarding-step">
          <h2>Proposito de la plataforma</h2>
          <p>
            El propósito de esta página es crear una red solidaria para facilitar el acceso a equipamiento ortopédico y fomentar la colaboración comunitaria.
          </p>
        </div>
      )}
      {step === 2 && (
        <div className="onboarding-step">
          <h2>Condiciones de la plataforma</h2>
          <p>Al utilizar esta página, usted acepta los siguientes términos y condiciones:</p>
          <ul>
            <li>No se permite la venta de artículos robados o de procedencia dudosa.</li>
            <li>Todos los artículos deben estar en buen estado y ser funcionales.</li>
            <li>El uso de esta plataforma es para fines solidarios y no comerciales.</li>
            <li>La plataforma no se hace responsable por transacciones entre usuarios.</li>
          </ul>
        </div>
      )}
      {step === 3 && (
        <div className="onboarding-step">
          <h2>Gracias por Unirse</h2>
          <p>
            Estamos encantados de que se una a nuestra comunidad. ¡Esperamos que disfrute de su experiencia!
          </p>
        </div>
      )}
      <div className="onboarding-navigation">
        <div className="progress-indicators">
          <div className={`circle ${step === 1 ? 'active' : ''}`}></div>
          <div className={`circle ${step === 2 ? 'active' : ''}`}></div>
          <div className={`circle ${step === 3 ? 'active' : ''}`}></div>
        </div>
        <button
          className="progress-button"
          onClick={nextStep}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;

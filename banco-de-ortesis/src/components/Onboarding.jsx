// src/components/Onboarding.jsx
import '../styles/Styles.css';
import React, { useState } from 'react';

const Onboarding = ({ onFinish }) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      onFinish();
    }
  };

  const steps = [
    {
      title: 'Bienvenido a nuestra plataforma',
      content: 'Aquí puedes encontrar el propósito de la página...',
    },
    {
      title: 'Términos y Condiciones',
      content: 'Aquí están los términos y condiciones...',
    },
    {
      title: 'Gracias por unirte',
      content: 'Has completado el onboarding. ¡Gracias!',
    },
  ];

  return (
    <div className="onboarding-container">
      <div className="content">
        <h2>{steps[step].title}</h2>
        <p>{steps[step].content}</p>
      </div>
      <div className="controls">
        <button onClick={nextStep}>
          {step < 2 ? 'Siguiente' : 'Finalizar'}
        </button>
        <div className="dots">
          {steps.map((_, index) => (
            <div key={index} className={`dot ${index === step ? 'active' : ''}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega a la página anterior
  };

  const handleGoHome = () => {
    navigate('/'); // Navega a la página de inicio
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Error</h1>
      <p className="text-xl text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe.</p>
      <div className="flex space-x-4">
        <button
          onClick={handleGoHome}
        className="bg-[#848484] hover:bg-[#6c6c6c] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Ir al Inicio
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

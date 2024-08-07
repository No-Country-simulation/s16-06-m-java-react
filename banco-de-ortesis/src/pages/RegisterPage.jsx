// src/pages/Register.jsx
import '../styles/Styles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/AuthService';
import Onboarding from './Onboarding';
import { useAuth } from '../context/AuthProvider';
import useAlert from '../hooks/useAlert';
import PopUpAlert from '../components/Modals/PopUpAlert';

const Register = () => {
  const auth = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    province: '',
    repeatedPassword: '',
    socialWorkNumber:'',
    disabilityCertificateNumber:''
  });
  
  const[socialInput, setSocialInput] = useState(false);
  const[disabilityCert, setDisabilityCert] = useState(false);

  const [showOnboarding, setShowOnboarding] = useState(false);
  const navigate = useNavigate();
  const { isAlertVisible, alertMessage, showAlert, closeAlert } = useAlert();
  if (auth.isAuthenticated) navigate('/home');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSelectChange = (e, setFunction) =>{
    setFunction(e.target.value === 'true');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await registerUser(formData);
      showAlert('Registro exitoso!', 'Por favor, inicia sesión');

      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      showAlert('Error al registrarse', 'Rellena bien los campos e intentalo nuevamente')
    }
    console.log('Datos usuario a Registrar', formData);
  };

  const handleFinishOnboarding = () => {
    navigate('/home');
  };

  if (showOnboarding) {
    return <Onboarding onFinish={handleFinishOnboarding} />;
  }

  return (
    <div className="register-container min-h-screen flex flex-col justify-center items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-md">
        <div className="profile-header mb-4">
          <div className="profile-pic"><img src="/img/logo.webp" alt="logo" /></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="firstName" className="sr-only">Nombre</label>
              <input
                type="text"
                id="firstName"
                name="name"
                autoComplete="given-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">Apellido</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="new-password"
                minLength="8"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="repeatedPassword" className="sr-only">Repetir Contraseña</label>
              <input
                type="password"
                id="repeatedPassword"
                name="repeatedPassword"
                autoComplete="new-password"
                minLength="8"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Repetir contraseña"
                value={formData.repeatedPassword}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="province" className='sr-only'>Ubicación</label>
              <select
                name="province"
                id="province"
                value={formData.province}
                onChange={handleInputChange}
                className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3  text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Elige tu provincia </option>
                <option value="Buenos Aires" defaultValue>Buenos Aires</option>
                <option value="Catamarca">Catamarca</option>
                <option value="Chaco">Chaco</option>
                <option value="Chubut">Chubut</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Entre Ríos">Entre Ríos</option>
                <option value="Formosa">Formosa</option>
                <option value="Jujuy">Jujuy</option>
                <option value="La Pampa">La Pampa</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Mendoza">Mendoza</option>
                <option value="Misiones">Misiones</option>
                <option value="Neuquén">Neuquén</option>
                <option value="Río Negro">Río Negro</option>
                <option value="Salta">Salta</option>
                <option value="San Juan">San Juan</option>
                <option value="San Luis">San Luis</option>
                <option value="Santa Cruz">Santa Cruz</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="Santiago del Estero">Santiago del Estero</option>
                <option value="Tierra del Fuego">Tierra del Fuego</option>
                <option value="Tucumán">Tucumán</option>
              </select>
            </div>
            <div className='text-blueSecond'>
              <label htmlFor="disabilityCertificateNumber">Tienes Certificado de Discapacidad ?</label>
              <div className='flex gap-2'>
                <select className=" max-w-fit pr-10 shadow appearance-none border border-gray-300 rounded w-full py-2 px-3  text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e)=> handleSelectChange(e, setDisabilityCert)}
                >
                  <option value={false} defaultValue>No</option>
                  <option value={true}>Si</option>
                </select>
                <input type="number" placeholder="Ingresa numero" disabled={!disabilityCert} value={formData.disabilityCertificateNumber}
                  onChange={handleInputChange}
                  name='disabilityCertificateNumber'
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="socialWorkNumber">Tienes Obra Social ?</label>
              <div className='flex gap-2'>
                <select className="max-w-fit pr-10 shadow appearance-none border border-gray-300 rounded w-full py-2 px-3  text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              onChange={(e)=> handleSelectChange(e, setSocialInput)}
                >
                  <option value={false} defaultValue>No</option>
                  <option value={true}>Si</option>
                </select>
                <input type="number" placeholder="Ingresa numero"
                disabled={!socialInput}
                name='socialWorkNumber'
                value={formData.socialWorkNumber}
                onChange={handleInputChange}
                  className="flex-grow-1 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#679436] hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Registrarme
            </button>
          </div>
          <div className="continue-without-registering text-center mt-4">
            <label htmlFor="terms">
              <a
                href="#"
                className="continue-link text-sm text-blue-600 hover:text-blue-500"
                onClick={() => setShowOnboarding(true)}
              >
                Continuar sin registrarme
              </a>
            </label>
          </div>
        </form>
      </div>
      <PopUpAlert
        title={alertMessage.title}
        description={alertMessage.description}
        isVisible={isAlertVisible}
        onClose={closeAlert}
      />
    </div>
  );
};

export default Register;

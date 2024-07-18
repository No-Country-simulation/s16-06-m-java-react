// src/pages/ArticlePage.jsx
import '../styles/Styles.css';
import React from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import Button1 from '../components/Buttons/Button1';
import Button2 from '../components/Buttons/Button2';
import Carousel from '../components/Carousel';

const ArticlePage = () => {
  const items = ['https://www.enfoquedenegocios.com.ar/wp-content/uploads/2019/09/ortopedia-2.jpg', 'https://8e93beb6.rocketcdn.me/storage/2023/01/ortopedia.jpg', 'https://8e93beb6.rocketcdn.me/storage/2023/01/ortopedia.jpg'];
  return (
    <div className='flex flex-col gap-4'>
      <Carousel items={items} />
      <div className='flex flex-col gap-5 p-6 text-lg'>
        <div className='flex items-center text-xl'>
          <h2>Nombre del producto</h2>
          {/* Usuario? */}
        </div>
        <div className='flex gap-2'>
          <MdOutlineLocationOn />
          <span>Ubicación aprox</span>
        </div>
        <ul>
          <li>Descripción</li>
          <li>Categoría</li>
          <li>Estado</li>
          <li>Cantidad</li>
        </ul>

        <Button1 name='Hacer una pregunta' />
        <Button2 name='Solicitar' />
      </div>
    </div>
  );
};

export default ArticlePage;

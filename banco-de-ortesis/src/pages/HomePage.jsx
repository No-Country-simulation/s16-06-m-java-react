// src/pages/HomePage.jsx
import ProductCard from '../components/ProductCard';
import '../styles/Styles.css';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full items-center'>
      <h1 class="text-lg font-bold text-black mb-4">Más buscados</h1>
      <div className='flex flex-col m-4 gap-3'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePage;

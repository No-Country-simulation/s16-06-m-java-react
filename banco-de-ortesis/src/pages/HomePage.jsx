// src/pages/HomePage.jsx
import ProductCard from '../components/ProductCard';
import React from 'react';

const HomePage = () => {
  return (
    <div className='flex flex-col w-full items-center mb-24'>
      <h1 class="text-lg self-start font-bold mx-4">Más buscados</h1>
      <div className='flex flex-col m-4 gap-3'>

        <ProductCard />
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

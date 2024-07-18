// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import React from 'react';

const HomePage = ({productList}) => {

  if(!productList) return null;

  console.log('Recibiendo productos', productList);  
  return (
    <div className='flex flex-col w-full items-center p-4 mb-40'>
      <h1 className="text-lg self-start font-bold">Más buscados</h1>
      <div className='flex w-full flex-col gap-3'>
        {productList.map(product => (<Link to={`/article/${product.id}`} key={product.id}> <ProductCard product={product} /> </Link> ))}
      </div>
    </div>
  );
};

export default HomePage;

// src/pages/HomePage.jsx
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import React, { useEffect, useState } from 'react';
import { getAllArticles } from '../services/ArticleService';

const HomePage = () => {

  const [productList, setProductList] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllArticles(); // Llama a la función correctamente y espera su resolución
        setProductList(products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  if(!productList) return null;

  console.log('Recibiendo productos', productList);  
  return (
    <div className='flex flex-col w-full items-center p-4 mb-20'>
      <h1 className="text-lg self-start font-bold">Más buscados</h1>
      <div className='flex w-full flex-col gap-3'>
        {productList.map(product => (<Link to={`/article/${product.idProduct}`} key={product.idProduct}> <ProductCard product={product} /> </Link> ))}
      </div>
    </div>
  );
};

export default HomePage;

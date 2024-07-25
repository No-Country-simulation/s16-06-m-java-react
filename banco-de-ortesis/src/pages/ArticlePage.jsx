// src/pages/ArticlePage.jsx
import '../styles/Styles.css';
import React, { useEffect, useState } from 'react';
import { MdOutlineLocationOn } from "react-icons/md";
import Button1 from '../components/Buttons/Button1';
import Button2 from '../components/Buttons/Button2';
import Carousel from '../components/Carousel';
import { useParams } from 'react-router-dom';
import { getArticleDetails } from '../services/ArticleService';

const ArticlePage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProductId = async () => {
      try {
        const product = await getArticleDetails(id);
        setProduct(product);
      } catch (error) {
        console.error('Error al obtener el producto', error);
      }
    };

    getProductId();
  }, [id]);

  if(!product) return null;

  const {name, description, creationDate, available, state, category, imageURL} = product;

  const items = [imageURL, imageURL, imageURL];
  return (
    <div className='flex flex-col gap-4 mb-20'>
      <Carousel items={items} />
      <div className='flex flex-col gap-5 p-6 text-lg'>
        <div className='flex items-center text-xl'>
          <h2>{name}</h2>
          {/* Usuario? */}
        </div>
        <div className='flex gap-2'>
          <MdOutlineLocationOn />
          <span>Ubicación aprox</span>
        </div>
        <ul>
          <li>{description}</li>
          <li>{category.name}</li>
          <li>{state}</li>
          <li>Cantidad</li>
        </ul>

        <Button1 name='Hacer una pregunta' />
        <Button2 name='Solicitar' />
      </div>
    </div>
  );
};

export default ArticlePage;

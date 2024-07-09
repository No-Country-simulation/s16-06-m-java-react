// src/pages/ArticlePage.jsx
import React from 'react';
import '../styles/Styles.css';


const articles = [
  {
    id: 1,
    category: 'Silla de ruedas',
    description: 'Silla de ruedas plegable en buen estado.',
    state: 'Disponible',
    quantity: 1,
  },
  {
    id: 2,
    category: 'Muletas',
    description: 'Par de muletas ajustables.',
    state: 'Disponible',
    quantity: 2,
  },
];

const ArticlePage = () => {
  return (
    <div className="articles-container">
      <h2>Artículos Disponibles</h2>
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} className="article-item">
            <h3>{article.category}</h3>
            <p>{article.description}</p>
            <p>Estado: {article.state}</p>
            <p>Cantidad: {article.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;

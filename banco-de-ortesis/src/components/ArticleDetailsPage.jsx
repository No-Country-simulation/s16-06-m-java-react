// src/pages/ArticleDetailsPage.jsx
import React from 'react';
import '../styles/Styles.css';

const ArticleDetailsPage = ({ article }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
      <p>{article.description}</p>
      {/* Aquí irán los detalles completos del artículo */}
    </div>
  );
};

export default ArticleDetailsPage;

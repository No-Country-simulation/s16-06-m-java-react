// src/components/ArticleForm.jsx
import React, { useState } from 'react';
import '../styles/Styles.css';

const ArticleForm = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [state, setState] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para subir el artículo
    console.log({ category, description, state, quantity });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="article-form">
        <h2>Subir Artículo</h2>
        <div>
          <label>Categoría</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Estado</label>
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cantidad</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Subir Artículo</button>
      </form>
    </div>
  );
};

export default ArticleForm;

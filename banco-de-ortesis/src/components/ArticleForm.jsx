// src/components/ArticleForm.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Styles.css';
import { createArticle, updateArticle } from '../services/ArticleService';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ArticleForm = () => {
  const navigate = useNavigate();
  const{id} = useParams();
  const location = useLocation();
  const currentProduct = location.state?.product || null;

  //this is a temporal funcion, will delete when backend be connected.
  const formatDate = (date) => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  };

  const [product, setProduct] = useState({
    name: '',
    description: '',
    creationDate: formatDate(Date.now()),
    available: true,
    state: '',
    category: '',
    img: ''
  });

  useEffect(() => {
    if (currentProduct) {
      delete currentProduct.id;
      setProduct(currentProduct);
    }
  }, [currentProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ternary will decide wich operation will execute.
    try {
      const response = currentProduct != null ? await updateArticle(id, product) : await createArticle(product);
      console.log(response);
      if (response) alert('Articulo registrado exitosamente');
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    console.log(product);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="article-form">
        <h2>Publicar</h2>
        <div>
          <label>Titulo:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Seleccione una categoría</option>
          <option value="Miembro Superior">Miembro Superior</option>
          <option value="Miembro Inferior">Miembro Inferior</option>
          <option value="Axiales">Axiales</option>
          <option value="Sillas de ruedas">Sillas de ruedas</option>
          <option value="Bastones">Bastones</option>
          <option value="Andadores">Andadores</option>
          <option value="Cama ortopédica">Cama ortopédica</option>
          <option value="Colchon antiescaras">Colchon antiescaras</option>
          <option value="Muletas">Muletas</option>
        </select>
        <div>
          <label>Descripción</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Estado</label>
          <input
            type="text"
            name="state"
            value={product.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Url Imagen</label>
          <input
            type="text"
            name="img"
            value={product.img}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Subir Artículo</button>
      </form>
    </div>
  );
};

export default ArticleForm;

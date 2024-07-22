// src/components/ArticleForm.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Styles.css';
import { createArticle, updateArticle } from '../services/ArticleService';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ArticleForm = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  const { id } = useParams();
=======
  const{id} = useParams();
>>>>>>> ec44b7a7a1bc066465ef196b24421498b33830cd
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
    category: '',
    subcategory: '',
    description: '',
    creationDate: formatDate(Date.now()),
    available: true,
    state: '',
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

<<<<<<< HEAD
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct((prevProduct) => ({
        ...prevProduct,
        img: reader.result
      }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = currentProduct != null ? await updateArticle(id, product) : await createArticle(product);
      console.log(response);
      if (response) alert('Artículo registrado exitosamente');
=======
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ternary will decide wich operation will execute.
    try {
      const response = currentProduct != null ? await updateArticle(id, product) : await createArticle(product);
      console.log(response);
      if (response) alert('Articulo registrado exitosamente');
>>>>>>> ec44b7a7a1bc066465ef196b24421498b33830cd
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    console.log(product);
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="article-form">
      <h2 className="text-center text-2xl font-bold mb-6">Publicar</h2>
        <div className="form-group">
          <label htmlFor="name">Título:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoría:</label>
          <select
            id="category"
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
        </div>
        <div className="form-group">
          <label htmlFor="subcategory">Subcategoría:</label>
          <input
            type="text"
            id="subcategory"
            name="subcategory"
            value={product.subcategory}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="img">Agregar Imagen:</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancelar</button>
          <button type="submit" className="submit-button">Publicar</button>
        </div>
        {product.img && (
          <div className="form-group">
            <img src={product.img} alt="Preview" className="image-preview" />
          </div>
        )}
      </form>
    </div>
  );
};

export default ArticleForm;

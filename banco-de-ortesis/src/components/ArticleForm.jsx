// src/components/ArticleForm.jsx
import React, { useEffect, useState } from 'react';
import { createArticle, updateArticle } from '../services/ArticleService';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const ArticleForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const currentProduct = location.state?.product || null;

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
    material: '',
    state: '',
    description: '',
    creationDate: formatDate(Date.now()),
    available: true,
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
      navigate('/');
    } catch (error) {
      console.error(error);
    }
    console.log(product);
  };

  const handleCancel = () => {
    navigate('/profile');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto py-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex items-center justify-center mb-6">
          <button
            type="button"
            onClick={handleBackClick}
            className="mr-2 bg-white text-gray-700 hover:text-gray-900 focus:outline-none rounded-full p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <h2 className="text-center text-2xl font-bold flex-grow">Publicar</h2>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Título:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Categoría:</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Seleccione una categoría</option>
            <option value="Miembro Superior">🖐️ Miembro Superior</option>
            <option value="Miembro Inferior">🦵 Miembro Inferior</option>
            <option value="Axiales">🦴 Axiales</option>
            <option value="Sillas de ruedas">🦽 Sillas de ruedas</option>
            <option value="Bastones">🦯 Bastones</option>
            <option value="Andadores">🚶‍♂️ Andadores</option>
            <option value="Cama ortopédica">🛏️ Cama ortopédica</option>
            <option value="Colchon antiescaras">🛏️ Colchon antiescaras</option>
            <option value="Muletas">🩼 Muletas</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="material" className="block text-gray-700 text-sm font-bold mb-2">Material:</label>
          <select
            id="material"
            name="material"
            value={product.material}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Seleccione un material</option>
            <option value="Metal">🔩 Metal</option>
            <option value="Plástico">🧴 Plástico</option>
            <option value="Otro">🔧 Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-gray-700 text-sm font-bold mb-2">Estado:</label>
          <select
            id="state"
            name="state"
            value={product.state}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Seleccione un estado</option>
            <option value="Bueno">👍 Bueno</option>
            <option value="Regular">👌 Regular</option>
            <option value="Malo">👎 Malo</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="img" className="block text-gray-700 text-sm font-bold mb-2">Agregar Imagen:</label>
          <input
            type="file"
            id="img"
            name="img"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="bg-white border-2 border-[#679436] text-[#679436] hover:bg-[#679436] hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-[#848484] hover:bg-[#6c6c6c] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Publicar
          </button>
        </div>
        {product.img && (
          <div className="mt-4">
            <img src={product.img} alt="Preview" className="w-full h-auto rounded" />
          </div>
        )}
      </form>
    </div>
  );
};

export default ArticleForm;

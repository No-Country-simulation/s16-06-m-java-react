import { API_URL } from "../context/apiurl";

const BASE_URL = `${API_URL}/products`;

export const getArticleDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('No se encontró el producto deseado');
    }
  } catch (error) {
    console.error('Ocurrió un error al obtener el producto indicado', error);
    throw new Error('Ocurrió un error al obtener el producto indicado');
  }
};

export const getAllArticles = async () => {
  try {
    const response = await fetch(`${BASE_URL}/get`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('No se pudo obtener la lista de productos');
  } catch (error) {
    console.error('Ocurrió un error al obtener la lista de productos', error);
    throw new Error('Ocurrió un error al obtener la lista de productos');
  }
};

export const createArticle = async(article) => {
  try {
    const response = await fetch(`${BASE_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article)
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Exito al subir');
      return data;
    }
  } catch (error) {
    console.error('Ocurrió un error al registrar el producto', error);
    throw error;
  }
};

export const updateArticle = async(id, updatedArticle) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedArticle)
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Modificado con éxito!');
      return data;
    }
  } catch (error) {
    console.error('Ocurrió un error al actualizar el producto', error);
    throw error;
  }
};

export const deleteArticle = async(id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      console.log('Producto borrado correctamente');
    } else {
      throw new Error('No se pudo borrar el producto');
    }
  } catch (error) {
    console.error('Ocurrió un error al borrar el producto', error);
    throw error;
  }
};

export const getUserArticles = async(id) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('No se pudieron obtener los artículos del usuario');
    }
  } catch (error) {
    console.error('Ocurrió un error al obtener artículos del usuario', error);
    throw error;
  }
};

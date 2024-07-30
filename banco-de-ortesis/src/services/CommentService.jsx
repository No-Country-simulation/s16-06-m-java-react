import { API_URL } from "../context/apiurl";

const BASE_URL = `${API_URL}/comments`;

export const getComments = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/product/${productId}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('No se pudo obtener los comentarios');
  } catch (error) {
    console.error('Ocurrió un error al obtener los comentarios', error);
    throw error;
  }
};

export const addComment = async (comment) => {
  try {
    const response = await fetch(`${BASE_URL}/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment)
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('No se pudo agregar el comentario');
  } catch (error) {
    console.error('Ocurrió un error al agregar el comentario', error);
    throw error;
  }
};

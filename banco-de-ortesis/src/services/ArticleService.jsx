
const API_URL = 'https://alura-geek-api-kohl.vercel.app/product';

export const getArticleDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (response.ok) {
      const data = await response.json(); // Agrega await aquí
      return data;
    } else { response.status === '404' } {
      throw new Error('No se encontro el producto deseado');
    }
  } catch (error) {
    console.error('Ocurrió un error al obtener el producto indicado', error);
    throw new Error('Ocurrió un error al obtener el producto indicado');
  }
};

export const getAllArticles = async () => {
  try {
    const response = await fetch(API_URL);
    if (response.ok) {
      const data = await response.json(); // Agrega await aquí
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
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article)
    });

    if (response) {
      const data = await response.json();
      console.log('Exito al subir');
      return data;
    }
  } catch (error) {
    console.error('Ocurrio un errror al registrar el producto', error);
    throw error;
  }
};

export const updateArticle = (id, updatedArticle) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      articles = articles.map(article =>
        article.id === parseInt(id) ? { ...article, ...updatedArticle } : article
      );
      resolve(articles.find(article => article.id === parseInt(id)));
    }, 1000);
  });
};

export const deleteArticle = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      articles = articles.filter(article => article.id !== parseInt(id));
      resolve(true);
    }, 1000);
  });
};

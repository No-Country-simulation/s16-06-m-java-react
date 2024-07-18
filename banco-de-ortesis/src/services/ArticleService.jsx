const API_URL = 'http://tu-api-url.com/api/articles';

export const getArticleDetails = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener el artículo');
    }
    const article = await response.json();
    return article;
  } catch (error) {
    console.error(error);
  }
};

export const getAllArticles = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Error al obtener los artículos');
    }
    const articles = await response.json();
    return articles;
  } catch (error) {
    console.error(error);
  }
};

export const createArticle = async (article) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    });
    if (!response.ok) {
      throw new Error('Error al crear el artículo');
    }
    const newArticle = await response.json();
    return newArticle;
  } catch (error) {
    console.error(error);
  }
};

export const updateArticle = async (id, updatedArticle) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedArticle),
    });
    if (!response.ok) {
      throw new Error('Error al actualizar el artículo');
    }
    const article = await response.json();
    return article;
  } catch (error) {
    console.error(error);
  }
};

export const deleteArticle = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Error al eliminar el artículo');
    }
    return true;
  } catch (error) {
    console.error(error);
  }
};

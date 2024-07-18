let articles = [

  ];
  
  export const getArticleDetails = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(articles.find(article => article.id === parseInt(id)));
      }, 1000);
    });
  };
  
  export const getAllArticles = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(articles);
      }, 1000);
    });
  };
  
  export const createArticle = (article) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        article.id = articles.length + 1;
        articles.push(article);
        resolve(article);
      }, 1000);
    });
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
  
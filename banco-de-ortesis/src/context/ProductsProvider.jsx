import { createContext, useEffect, useState } from "react";
import { getAllArticles } from "../services/ArticleService";
import { useAuth } from "./AuthProvider";
import { getFavorites } from "../services/FavoritesService";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      getUserFavorites(auth.user.id_user);
    }
  },[auth])


  const fetchProducts = async () => {
    try {
      const products = await getAllArticles();
      setProductList(products);
      setShowList(products);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };


  const getUserFavorites = async (id) => {
    try {
      const favorites = await getFavorites(id);
      setFavorites(favorites);
    } catch (error) {
      console.error('Ocurrio un error al cargar favoritos');
    }
  }

  const filterProducts = (query) => {
    if (query) {
      const filtered = productList.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setShowList(filtered);
    } else {
      setShowList(productList);
    }
  };

  return (

    <ProductsContext.Provider value={{ productList, showList, favorites, filterProducts, loading, fetchProducts, getUserFavorites }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
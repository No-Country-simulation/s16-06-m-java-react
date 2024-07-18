// src/App.jsx
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArticlePage from './pages/ArticlePage';
import UserProfilePage from './pages/UserProfilePage';
import ArticleForm from './components/ArticleForm';
import MobileNav from './components/MobileNav';
import HeaderNav from './components/HeaderNav';
import { getAllArticles } from './services/ArticleService';

function App() {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    try {
      const products = await getAllArticles(); // Llama a la función correctamente y espera su resolución
      setProductList(products);
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);


  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage productList={productList} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/upload" element={<ArticleForm />} />
      </Routes>
      <MobileNav />
    </Router>
  );
}

export default App;

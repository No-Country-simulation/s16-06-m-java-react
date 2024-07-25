// src/App.jsx
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ArticlePage from './pages/ArticlePage';
import UserProfilePage from './pages/UserProfilePage';
import Footer from './components/Footer';
import ArticleForm from './components/ArticleForm';
import MobileNav from './components/MobileNav';
import HeaderNav from './components/HeaderNav';
import { getAllArticles } from './services/ArticleService';
import Onboarding from './components/Onboarding';
import UserArticles from './pages/UserArticles';

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
      {/* <Header /> */}
      <HeaderNav />
      <Routes>
        <Route path="/" element={<HomePage productList={productList} />} />
        <Route path="/onboarding" component={Onboarding} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/upload" element={<ArticleForm />} />
        <Route path='/update/:id' element={<ArticleForm />} />
        <Route path='/userArticles' element={<UserArticles />} />
      </Routes>
      <MobileNav />
      {/* <Notification message="Esto es una notificación!" /> */}
    </Router>
  );
}

export default App;

// src/App.jsx
import React from 'react';
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

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <HeaderNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path="/upload" element={<ArticleForm />} />
        </Routes>
      {/* <Footer /> */}
      <MobileNav />
      {/* <Notification message="Esto es una notificación!" /> */}
    </Router>
  );
}

export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ArticlePage from './components/ArticlePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ArticleForm from './components/ArticleForm';
import SearchBar from './components/SearchBar';
import Notification from './components/Notification';


function App() {
  return (
    <Router>
      <Header />
      <main className="container mx-auto p-4">
        <SearchBar onSearch={(query) => console.log(query)} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/upload" element={<ArticleForm />} />
        </Routes>
      </main>
      <Footer />
      <Notification message="Esto es una notificación!" />
    </Router>
  );
}

export default App;

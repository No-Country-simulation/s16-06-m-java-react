// src/App.jsx
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
import Onboarding from './pages/Onboarding';
import UserArticles from './pages/UserArticles';
import { AuthProvider } from './context/AuthProvider';

function App() {



  return (
    <AuthProvider>
      <Router>
        {/* <Header /> */}
        <HeaderNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
    </AuthProvider>
  );
}

export default App;

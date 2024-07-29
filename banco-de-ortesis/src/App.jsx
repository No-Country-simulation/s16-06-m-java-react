// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import Favorites from './pages/Favorites';
import ProtectedNode from './components/ProtectedNode/ProtectedNode';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();
  //add routes wich wont render Header or Nav components.
  const showHeaderNav = !['/login', '/register'].includes(location.pathname);

  return (
    <>
      {showHeaderNav && <HeaderNav />}
      <Routes>
        {/* Public Routes*/}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        {/* Protected Routes */}
        <Route element={<ProtectedNode />}>
          <Route path='/update/:id' element={<ArticleForm />} />
          <Route path="/upload" element={<ArticleForm />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path="/profile" element={<UserProfilePage />} />
          <Route path='/userArticles' element={<UserArticles />} />
        </Route>
      </Routes>
      <MobileNav />
    </>
  );
}

export default App;
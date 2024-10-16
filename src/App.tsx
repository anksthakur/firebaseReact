import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SignupPage from './page/signup';
import SigninPage from './page/signin';
import ErrorPage from './ErrorPage';
import HomePage from './page/home';
import { useState, useEffect } from 'react';

function App() {
  const [token, setToken] = useState<string | null>(null); 

  useEffect(() => {
    const firebaseToken = localStorage.getItem('firebaseToken');
    setToken(firebaseToken);
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={token ? <HomePage /> : <Navigate to="/signup" />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

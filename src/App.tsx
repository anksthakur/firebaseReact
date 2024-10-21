import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignupPage from './page/signup';
import SigninPage from './page/signin';
import ErrorPage from './ErrorPage';
import Entertainment from './page/entertainment';
import General from './page/general';
import Health from './page/health';
import Science from './page/science';
import Sports from './page/sports';
import Technology from './page/technology';
import Navbar from './components/Navbar';
import Home from './page/home';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';


function App() {
const {token} = useAuth();
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/signup' && location.pathname !== '/signin' && <Navbar />}
      <Routes>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signin' element={<SigninPage />} />
        <Route path='/' element={<ProtectedRoute element={<Home />} isAuthenticated={!!token} />} />
        <Route path='/entertainment' element={<Entertainment />} />
        <Route path='/general' element={<General />} />
        <Route path='/health' element={<Health />} />
        <Route path='/science' element={<Science />} />
        <Route path='/sports' element={<Sports />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default function Wrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
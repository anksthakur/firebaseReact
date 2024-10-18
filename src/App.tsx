import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './page/signup';
import SigninPage from './page/signin';
import ErrorPage from './ErrorPage';
import { useState, useEffect } from 'react';
import Entertainment from './page/entertainment';
import General from './page/general';
import Health from './page/health';
import Science from './page/science';
import Sports from './page/sports';
import Technology from './page/technology';
import News from './page/news';
import Navbar from './components/Navbar';

function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const firebaseToken = localStorage.getItem('firebaseToken');
    setToken(firebaseToken);
  }, []);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          < Route path='*' element={< ErrorPage />} />
        < Route path='/' element={<SignupPage />} />
          < Route path='/signin' element={<SigninPage />} />
          <Route path='/news' element={<News />} />
          < Route path='/entertainment' element={< Entertainment />} />
          < Route path='/general' element={< General />} />
          < Route path='/health' element={< Health />} />
          < Route path='/science' element={< Science />} />
          < Route path='/sports' element={< Sports />} />
          < Route path='/technology' element={< Technology />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

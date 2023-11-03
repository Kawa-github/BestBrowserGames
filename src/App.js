import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Register from './components/Register';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      <div className='area-register'>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}  >
                <Route index element={<RegisterPage />}/>
                <Route path='/login' element={<LoginPage />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </div>
      </div>
    </div>
  );
}

export default App;

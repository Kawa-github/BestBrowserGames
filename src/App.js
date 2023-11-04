import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';


function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}  >
                <Route index element={<RegisterPage />}/>
                <Route path='/login' element={<LoginPage />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div>
      <BrowserRouter>
          <Routes>
             <Route path='/home' element={<GamePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

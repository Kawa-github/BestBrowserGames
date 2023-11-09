import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';
import NewGamePage from './pages/NewGamePage';
import CategoryPage from './pages/CategoryPage';
import CategoryGamePage from './pages/CategoryGamePage';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage />}  >
                <Route index element={<RegisterPage />}/>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/home' element={<GamePage />} />
                <Route path='/category' element={<CategoryPage />} />
                <Route path='/category/:id' element={<CategoryGamePage />} />
                <Route path='/newGame' element={<NewGamePage />} />
              </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <div>
      <BrowserRouter>
          <Routes>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

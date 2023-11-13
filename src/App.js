import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import GamePage from './pages/GamePage';
import GameDetailsPage from './pages/GameDetailsPage';
import NewGamePage from './pages/NewGamePage';
import CategoryPage from './pages/CategoryPage';
import CategoryDetailsPage from './pages/CategoryDetailsPage';
import EditUserPage from './pages/EditUserPage';

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
                <Route path='/home/game/:id' element={<GameDetailsPage />} />
                <Route path='/editUser' element={<EditUserPage />} />
                <Route path='/category' element={<CategoryPage />} />
                <Route path='/categories/:id' element={<CategoryDetailsPage  />} />
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

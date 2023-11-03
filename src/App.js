import './css/App.css';
import Header from './components/Header';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header />
      <div className='area-register'>
        <Register />
      </div>
      </div>
    </div>
  );
}

export default App;

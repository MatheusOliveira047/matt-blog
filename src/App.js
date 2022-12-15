import { BrowserRouter,Routes, Route } from 'react-router-dom';

import './App.css'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login';
import Register from './pages/Register';

//Componentes
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

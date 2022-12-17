import { BrowserRouter,Routes, Route,Navigate } from 'react-router-dom';
import { onAuthStateChanged} from 'firebase/auth';

import { useState,useEffect } from 'react';

import { useAuthentication } from './hooks/useAuthetication';

//context
import {AuthProvider} from './context/AuthContext'

//css
import './App.css'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login';
import Register from './pages/Register';
import Publish from './pages/Publish'
import Dashboard from './pages/Dashboard'

//Componentes
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {

  const [user,setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(()=>{

    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })

  },[auth])

  if(loadingUser){
    return <p>Carregando...</p>
  }


  return (
    <AuthProvider value={{user}}>
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={!user ? <Login/> : <Navigate to={'/'}/>} />
            <Route path='/register' element={!user ? <Register/> : <Navigate to={'/'}/>} />
            <Route path='/post/publish' element={user ? <Publish/> : <Login/>} />
            <Route path='/dashboard' element={user ? <Dashboard/> : <Login/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

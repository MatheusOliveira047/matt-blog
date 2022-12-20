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
import Search from './pages/Search';
import Post from './pages/Post';
import EditPost from './pages/EditPost';

//Componentes
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Loading from './components/Loading';

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
    return <Loading/>
  }


  return (
    <AuthProvider value={{user}}>
      <BrowserRouter>
        <NavBar/>
        <div className="container">
          <Routes>
             {/* ROTAS ABERTAS */}
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/search' element={<Search/>}/>
            <Route path='/post/:id' element={<Post/>}/>
            

                {/* ROTAS PROTEGIDAS */}
            <Route path='/login' element={!user ? <Login/> : <Navigate to={'/'}/>} />
            <Route path='/register' element={!user ? <Register/> : <Navigate to={'/'}/>} />
            <Route path='/post/publish' element={user ? <Publish/> : <Login/>} />
            <Route path='/post/edit/:id' element={user ? <EditPost/> : <Login/>} />
            <Route path='/dashboard' element={user ? <Dashboard/> : <Login/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

import './NavBar.css'

import { useAuthentication } from '../../hooks/useAuthetication'

import { useAuthValue } from '../../context/AuthContext'

import { useRef } from 'react'

import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  const {user} = useAuthValue()
  const {logout} = useAuthentication()

  const menuHambuguer = useRef(null)
  const menuResponsivo = useRef(null)

  function menu(e){
      menuHambuguer.current.classList.toggle("menuRes")
      menuResponsivo.current.classList.toggle("menuRes")
        
  }
    
 


  return (
    <header className={"header"} ref={menuResponsivo}>
        <div className={"logo"}>
           <Link to='/' className={"brand"}>
             Matt <span>Blog</span>
          </Link> 
        </div>
        <nav>

        <ul className={"nav_list"}>
          <li>
            <NavLink to={'/'}  onClick={menu} className={({isActive}) => (isActive ? "active" : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}  onClick={menu} className={({isActive}) => (isActive ? "active" : '')}>Sobre</NavLink>
          </li>
          {!user ? (
            <>
              <li>
                <NavLink to={'/login'}  onClick={menu} className={({isActive}) => (isActive ? "active" : '')}>Login</NavLink>
              </li>
              <li>
                <NavLink to={'/register'}  onClick={menu} className={({isActive}) => (isActive ? "active" : '')}>Cadastrar</NavLink>
              </li>
            </>
          ): 
            ( <>
            <li>
              <NavLink to={'/post/publish'}  onClick={menu} className={({isActive}) => (isActive ? "active" : '')}>Nova Publicação</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard'}  onClick={menu} className={({isActive}) => (isActive ? "active" : '')}>Dashboard</NavLink>
            </li>
            <li>
              <p onClick={logout}>Sair</p>
            </li>
            </>)
          }

        </ul>
            <div ref={menuHambuguer} className={"menu"} onClick={menu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </header>
  )
}

export default NavBar
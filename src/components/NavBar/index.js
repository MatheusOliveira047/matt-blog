import styles from './NavBar.module.css'

import { useAuthentication } from '../../hooks/useAuthetication'

import { useAuthValue } from '../../context/AuthContext'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const {user} = useAuthValue()

  return (
    <header className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        Matt <span>Blog</span>
      </NavLink>     

      <nav >
        <ul className={styles.links_list}>
          <li>
            <NavLink to={'/'} className={({isActive}) => (isActive ? styles.active : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'} className={({isActive}) => (isActive ? styles.active : '')}>Sobre</NavLink>
          </li>
          {!user ? (
            <>
              <li>
                <NavLink to={'/login'} className={({isActive}) => (isActive ? styles.active : '')}>Login</NavLink>
              </li>
              <li>
                <NavLink to={'/register'} className={({isActive}) => (isActive ? styles.active : '')}>Cadastrar</NavLink>
              </li>
            </>
          ): 
            ( <>
            <li>
              <NavLink to={'/post/publish'} className={({isActive}) => (isActive ? styles.active : '')}>Nova Publicação</NavLink>
            </li>
            <li>
              <NavLink to={'/dashboard'} className={({isActive}) => (isActive ? styles.active : '')}>Dashboard</NavLink>
            </li>
              <li>
              <NavLink to={'/register'} className={({isActive}) => (isActive ? styles.active : '')}>Sair</NavLink>
            </li>
            </>)
          }

        </ul>
      </nav>
    </header>
  )
}

export default NavBar
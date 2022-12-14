import styles from './NavBar.module.css'

import { NavLink } from 'react-router-dom'

const NavBar = () => {
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
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
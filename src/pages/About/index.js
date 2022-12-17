import styles from './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o Matt <span>Blog</span></h1>
      <h3>O Blog foi criado com React no Front-End e Firebase no Back-end</h3>
      <p>No Blog você pode criar sua conta e publicar seus posts sobre o Mundo Tech, Crie sua conta e compartilhe notícias</p>
      <Link to={'/post/publish'} className='btn'>Criar Post</Link>
    </div>
  )
}

export default About

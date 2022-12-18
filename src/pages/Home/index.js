import styles from './Home.module.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const Home = () => {
  const [query,setQuery] = useState('')
  const [posts] = useState([])

  const handleSearch = (e)=>{
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSearch} >
        <input 
        type="text" 
        name="source" 
        placeholder='ou busque por tags...'
        onChange={(e)=> setQuery(e.target.value)}
        />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div>
        <h1>Posts ...</h1>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>não foram encontrados posts</p>
            <Link to={'/post/publish'}>
              <button className="btn">

              Criar primeiro post
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home

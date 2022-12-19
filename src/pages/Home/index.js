import styles from './Home.module.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {useFetchDocuments} from '../../hooks/useFetchDocument'

import PostDatail from '../../components/PostDetail'


const Home = () => {
  const [query,setQuery] = useState('')
  const {documents: posts,loading} = useFetchDocuments("posts")
  const navigate = useNavigate()

  const handleSearch = (e)=>{
    e.preventDefault()

    if(query){
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSearch} >
        <input 
        type="text" 
        name="search" 
        placeholder='ou busque por tags...'
        onChange={(e)=> setQuery(e.target.value)}
        />
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div className={styles.posts}>
        {loading && <p>Carregando ....</p>}

        {posts && posts.map(post => (
         <PostDatail
         key={post.id}
          post={post}
         />
        ))}

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

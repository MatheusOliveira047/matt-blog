import { useFetchDocuments } from '../../hooks/useFetchDocument'
import { useQuery } from '../../hooks/useQuery'

import { Link } from 'react-router-dom'
import PostDatail from '../../components/PostDetail'

import styles from './Search.module.css'

const Search = () => {
  const query = useQuery()
  const search = query.get('q')

  const {documents: posts} = useFetchDocuments("posts", search)

  return (
    <div className={styles.search}>
      <h2 className={styles.title}>
       Resultados encontrados a partir da sua busca por {search}
      </h2>
     <div  className={styles.search_container}>
      {posts && posts.length === 0 && (
        <>
        <p>Não foram encontrados posts a partir da sua busca por {search}</p>
        <Link to={'/'} className="btn btn-dark">Voltar</Link>
        </>
      )}
      {posts && posts.map(post=>(
        <PostDatail key={post.id} post={post}/>
      ))}
     </div>
    </div>
  )
}

export default Search
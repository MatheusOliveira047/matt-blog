import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

import {useAuthValue} from '../../context/AuthContext'
import {useFetchDocuments} from '../../hooks/useFetchDocument'


const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  const {documents: posts, loading} = useFetchDocuments("posts",null,uid)
  // posts do usuário

  const handleDelete = (id)=>{

  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 
        ? (
        <div className={styles.nopost}>
          <p>Você não possui posts ainda</p>
          <p>
          <Link to={'/post/publish'} className='btn'>Crie seu primeiro Post</Link>
          </p>
        </div>) 
        
        : (
          <>
            <div>
              <span>Título</span>
              <span>Ações</span>
            </div>
            {posts && posts.map(post=>(
              <div key={post.id} className={styles.post}>
                <p>{post.title}</p>
                <div>
                  <Link to={`/post/${post.id}`} className="btn btn-outline">Ver</Link>
                  <Link to={`/post/edit/${post.id}`} className="btn btn-outline">Editar</Link>
                  <button className='btn btn-outline btn-danger' onClick={()=> handleDelete(post.id)}>Excluir</button>
                </div>
              </div>
            ))}
          </>
        )}
    </div>
  )
}

export default Dashboard

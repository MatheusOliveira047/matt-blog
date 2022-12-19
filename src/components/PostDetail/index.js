import styles from './PostDetail.module.css'

import { Link } from 'react-router-dom' 

const PostDatail = ({post})=>{
  return(
    <div className={styles.post_datail}>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p className={styles.createdBy}>{post.createdBy}</p>
      <div className={styles.tags}>
        {post.tagsArray.map(tag=>(
          <p key={tag}><span>#</span>{tag}</p>
        ))}
      </div>
      <Link to={`/post/${post.id}`} className="btn btn-outline">Ler</Link>
    </div>
  )
}

export default PostDatail
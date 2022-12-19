import styles from './PostDetail.module.css'

import { Link } from 'react-router-dom' 

const PostDatail = ({image,title,createdBy,tags,id})=>{
  return(
    <div className={styles.post_datail}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p className={styles.createdBy}>{createdBy}</p>
      <div className={styles.tags}>
        {tags.map(tag=>(
          <p key={tag}><span>#</span>{tag}</p>
        ))}
      </div>
      <Link to={`/post/${id}`} className="btn btn-outline">Clique aqui para mais informações</Link>
    </div>
  )
}

export default PostDatail
import styles from './Post.module.css'

import { useParams } from 'react-router-dom'

const Post = ()=> {
  const {id} = useParams()

  return(
    <h2>Post {id}</h2>
  )
}


export default Post
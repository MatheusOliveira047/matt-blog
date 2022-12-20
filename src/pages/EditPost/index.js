import styles from './EditPost.module.css'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import {useFetchDocument} from '../../hooks/useFetchPost'
import { useParams } from 'react-router-dom'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'

const EditPost = () => {
  const {id} = useParams()
  const {document:post} = useFetchDocument("posts",id)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [errors,setErrors] = useState('')

  useEffect(()=>{
    if(post){
      setTitle(post.title)
      setImage(post.image)
      setBody(post.body)

      const textTags = post.tagsArray.join(", ")

      setTags(textTags)
    }
  },[post])

  const {user} = useAuthValue()
  const {updateDocument,response} = useUpdateDocument("posts")

  const navigate = useNavigate()

  const handleSubmitPost = (e)=>{
    e.preventDefault()
    setErrors('')

    if(title.length < 10 ){
      return setErrors('Titulo precisa ter pelo menos 10 caracteres')
    }else if(body.length < 50){
      return setErrors('Conteudo precisa ter pelo menos 50 caracteres')
    }else{
      const tagsArray = tags.split(",").map(tag => {
        return tag.trim().toLowerCase()
      })

      updateDocument({
        title,
        image,
        body,
        tagsArray,
        uid:user.uid,
        createdBy: user.displayName
      })

      navigate('/dashboard')
    }


  }

  return (
    <div className={styles.edit}>
     {post && (
      <>
         <h2>Editar Post: {post.title}</h2>
      <p>Faça as correções no seu post</p>
      <form onSubmit={handleSubmitPost}>
        <label>
          <span>Titulo</span>
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            required 
            placeholder='Digite o titulo do seu post' />
        </label>
        <label>
          <span>URL da Imagem:</span>
          <input 
            type="url" 
            name="image" 
            value={image} 
            onChange={(e)=>setImage(e.target.value)}
            required 
            placeholder='Coloque a url da sua imagem para o post' />
        </label>
        <p className={styles.preview_image}>Preview da imagem atual</p>
        <img className={styles.image_preview} src={post.image} alt={post.title} />
        <label>
          <span>Conteudo</span>
          <textarea 
            type="text"
            rows='8' 
            name="body" 
            value={body} 
            onChange={(e)=>setBody(e.target.value)}
            required 
            placeholder='Digite o conteúdo do seu post'>

            </textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input 
            type="text" 
            name="tags" 
            value={tags} 
            onChange={(e)=>setTags(e.target.value)}
            required 
            placeholder='Insira as tags separadas por vírgula'/>
        </label>
        {response.loading ? (<button className='btn' disabled> Aguarde...</button>) : (<button className='btn'> Salvar</button>)}
      {response.error && <p className='error'>{response.error}</p>}
      {errors && <p className='error'>{errors}</p>}

      </form>
      </>
     )}
    </div>
  )
}

export default EditPost

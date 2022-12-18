import styles from './Publish.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const Publish = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [errors,setErrors] = useState('')

  const {user} = useAuthValue()
  const {insertDocument,response} = useInsertDocument("posts")

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

      insertDocument({
        title,
        image,
        body,
        tagsArray,
        uid:user.uid,
        createdBy: user.displayName
      })

      navigate('/')
    }


  }

  return (
    <div className={styles.publish}>
      <h2>Criar Post</h2>
      <p>Escreve sobre o que quiser e compartilhe seus conhecimentos</p>
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
        <label>
          <span>Conteudo</span>
          <textarea 
            type="text" 
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
        {response.loading ? (<button className='btn' disabled> Aguarde...</button>) : (<button className='btn'> Cadastrar</button>)}
      {response.error && <p className='error'>{response.error}</p>}
      {errors && <p className='error'>{errors}</p>}

      </form>
    </div>
  )
}

export default Publish

import styles from './Login.module.css'

import { useAuthentication } from '../../hooks/useAuthetication'
import { useState, useEffect } from 'react'

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')

  const {loading, error:authError, login} = useAuthentication()

  const handleFormLogin = async (e)=>{
    e.preventDefault()
    
    setError("")

    const user = {
      email,
      password
    }

   const res = await login(user)
   console.log(res)
  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }

  },[authError])

  
  return (
    <div className={styles.login}>
      <h1>Login</h1>
      <p>Faça seu login para começar a publicar seus posts</p>
      <form onSubmit={handleFormLogin}>
      
      <label>
        <span>email: </span>
        <input 
          type="email" 
          name='email' 
          required 
          placeholder='Email do usuário'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}  
        />
      </label>
      <label>
        <span>Senha: </span>
        <input 
          type="password" 
          name='password' 
          required 
          placeholder='insira sua senha' 
          value={password}
          onChange={(e)=> setPassword(e.target.value)} 
        />
      </label>
      
     {loading ? (<button className='btn' disabled> Aguarde...</button>) : (<button className='btn'> Login</button>)}
      {error && <p className='error'>{error}</p>}


      </form>
    </div>
  )
}

export default Login

import styles from './Loading.module.css'
import loading from './loading-36.gif'

const Loading = ()=>{
  return(
    <div className={styles.loading}>
      <img src={loading} alt="Carregando"  />
    </div>
  )
}

export default Loading
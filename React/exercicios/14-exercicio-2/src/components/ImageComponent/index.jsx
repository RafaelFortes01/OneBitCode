import styles from './ImageComponent.module.css'

export default function ImageComponent() {
   return(
      <img src="/star-wars.jpg" alt="Poster de Star Wars (1997)" className={styles.img}/>
   )
}
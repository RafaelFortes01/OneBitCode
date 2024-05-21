import styles from './ImageComponent.module.css'

export default function ImageComponent(props) {
   return(
      <img src={props.posterImg} alt={props.title} className={styles.img}/>
   )
}
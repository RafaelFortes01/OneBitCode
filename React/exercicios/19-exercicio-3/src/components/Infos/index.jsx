import styles from "./styles.module.css"

export default function Infos(props) {
   return(
      <p className={styles.info}>{props.info}</p>
   )
}
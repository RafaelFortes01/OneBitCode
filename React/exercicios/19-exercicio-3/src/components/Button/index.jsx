import styles from "./styles.module.css"

export default function Button(props) {
   return(
      <a href="https://google.com" target="_blank">
         <button className={styles.btn}>{props.button}</button>
      </a>
   )
}
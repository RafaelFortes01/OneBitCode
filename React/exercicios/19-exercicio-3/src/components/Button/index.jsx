import styles from "./styles.module.css"

export default function Button(props) {
   function handleClick(ev) {
      console.log(ev)
      alert("Redirecionando!")
   }
   return(
      <a href="https://google.com" target="_blank">
         <button className={styles.btn} onClick={handleClick}>{props.button}</button>
      </a>
   )
}
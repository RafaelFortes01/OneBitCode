import styles from "./styles.module.css"

function handleClick(ev) {
   console.log(ev)
   alert("Redirecionando!")
}

export default function Button(props) {
   return(
      <a href="https://google.com" target="_blank">
         <button className={styles.btn} onClick={handleClick}>{props.button}</button>
      </a>
   )
}
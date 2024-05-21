import styles from "./styles.module.css"
import Infos from "../Infos"
import Button from "../Button"

export default function Profile() {
   return(
      <div>
         <img src="" alt="" />
         <h2 className={styles.h2}>John Doe</h2>
         <Infos/>
         <Infos/>
         <Infos/>
         <Button/>
         <Button/>
         <Button/>
      </div>
   )
}
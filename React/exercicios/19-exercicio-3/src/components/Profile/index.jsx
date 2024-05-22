import styles from "./styles.module.css"
import Infos from "../Infos"
import Button from "../Button"

export default function Profile(props) {
   return(
      <div className={styles.card}>
         <div>
            <img src="../src/assets/foto-perfil.jpg" alt="Foto de perfil" className={styles.img}/>
            <h2 className={styles.name}>Rafael Fortes</h2>
         </div>

         <div className={styles.infosDiv}>
            <Infos info="Desenvolvedor front-end"/>
            <Infos info="+55(11)91234-5678"/>
            <Infos info="rafael@email.com"/>
         </div>

         <div className={styles.buttonsDiv}>
            <Button button="GitHub"/>
            <Button button="LinkedIn"/>
            <Button button="Portfólio"/>
         </div>
      </div>
   )
}
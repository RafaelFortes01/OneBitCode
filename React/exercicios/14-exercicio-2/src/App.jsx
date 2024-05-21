import ImageComponent from "./components/ImageComponent";
import Title from "./components/Title";
import Text from "./components/Text"
import Button from "./components/Button";
import styles from "./App.module.css"
import swPosterImg from './assets/star-wars.jpg'
import taPosterImg from './assets/the-arrival.jpg'
import cmPosterImg from './assets/catch-me.jpg'

export default function App() {
  return(
    <div className={styles.mainContent}>
      <div className={styles.app}>
        <ImageComponent posterImg={swPosterImg}/>
        <div className={styles.textContent}>
          <Title title="Pôster: Star Wars"/>
          <Text/>
          <Button/>
        </div>   
      </div>
      <div className={styles.app}>
        <ImageComponent posterImg={taPosterImg}/>
        <div className={styles.textContent}>
          <Title title="Pôster: The Arrival"/>
          <Text/>
          <Button/>
        </div>   
      </div>
      <div className={styles.app}>
        <ImageComponent posterImg={cmPosterImg}/>
        <div className={styles.textContent}>
          <Title title="Pôster: Catch Me If You Can"/>
          <Text/>
          <Button/>
        </div>   
      </div>
    </div>
    
)
}
import ImageComponent from "./components/ImageComponent";
import Title from "./components/Title";
import Text from "./components/Text"
import Button from "./components/Button";
import styles from "./App.module.css"

export default function App() {
  return(
    <div className={styles.mainContent}>
      <div className={styles.app}>
        <ImageComponent/>
        <div className={styles.textContent}>
          <Title/>
          <Text/>
          <Button/>
        </div>   
      </div>
      <div className={styles.app}>
        <ImageComponent/>
        <div className={styles.textContent}>
          <Title/>
          <Text/>
          <Button/>
        </div>   
      </div>
    </div>
)
}
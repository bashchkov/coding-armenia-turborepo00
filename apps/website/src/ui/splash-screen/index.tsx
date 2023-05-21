import styles from './styles.module.css'

const SplashScreen = () => {
  return (
    <div className={styles.wrap}>
      <span className={styles.overlay} />
      <span className={styles.sphere} />
    </div>
  )
}

export default SplashScreen

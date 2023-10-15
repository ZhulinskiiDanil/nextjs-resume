import styles from './main.module.scss'
import { useScroll } from '@/shared/hooks/useScroll'

export function ScrollProgressBar() {
  const { ready } = useScroll()

  return <div
    style={{ opacity: ready + .2 }}
    className={styles.progressBar}
  >
    <div
      className={styles.fill}
      style={{ height: ready * 100 + "%" }}
    />
  </div>
}
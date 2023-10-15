import { InteractiveTitle } from '@/entities/interactiveTitle/ui'
import styles from './main.module.scss'

export function FirstSection() {
  return <section className={styles.container}>
    <InteractiveTitle title='RESUME'/>
    <button className={styles.button}>
      Download <span>PDF</span>
    </button>
  </section>
}
import { PropsWithChildren } from 'react'
import styles from './main.module.scss'

export function Section({ children }: PropsWithChildren) {
  return <section className={styles.section}>
    { children }
  </section>
}
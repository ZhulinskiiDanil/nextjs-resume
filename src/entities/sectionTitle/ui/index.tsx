import styles from './main.module.scss'

type SectionTitleProps = {
  title: string
}

export function SectionTitle({
  title
}: SectionTitleProps) {
  return <div className={styles.container}>
    <div className={styles.content}>
      <div className={styles.title}>{ title }</div>
      <div className={styles.stroke}>{ title }</div>
    </div>
  </div>
}
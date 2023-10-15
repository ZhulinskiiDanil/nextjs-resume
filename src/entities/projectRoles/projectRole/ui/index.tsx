import styles from './main.module.scss'

// Components
import Image from 'next/image'

type ProjectRoleProps = {
  title: string
  subtitle: string
  imageURL: string
}

export function ProjectRole({
  title, subtitle, imageURL
}: ProjectRoleProps) {
  return <div className={styles.container}>
    <div className={styles.image}>
      <Image src={imageURL} alt={title} fill />
    </div>
    <div className={styles.data}>
      <div className={styles.title}>
        { title }
      </div>
      <div className={styles.subtitle}>
        { subtitle }
      </div>
    </div>
  </div>
}
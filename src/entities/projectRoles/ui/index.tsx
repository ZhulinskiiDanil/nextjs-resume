import { ProjectRole } from '../projectRole/ui'
import styles from './main.module.scss'

export function ProjectRoles() {
  return <div className={styles.container}>
    <ProjectRole
      title='Next.js'
      subtitle='2 Year'
      imageURL='/icons/nextjs.png'
    />
    <ProjectRole
      title='React.js'
      subtitle='2.5 Year'
      imageURL='/icons/reactjs.png'
    />
    <ProjectRole
      title='Figma'
      subtitle='1.5 Year'
      imageURL='/icons/figma.png'
    />
  </div>
}
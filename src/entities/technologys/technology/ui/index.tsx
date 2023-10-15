import styles from './main.module.scss'

// Components
import Image from 'next/image'
import { Button } from '@/shared/ui'
import { Tags } from '@/entities/tags/ui'

type TechnologyProps = {
  type: string
  title: string
  body: string
  imageURL: string
  tags: { value: string }[]
  projectsLink?: string
  moreLink?: string
}

export function Technology({
  type, title, body, imageURL, tags, projectsLink, moreLink
}: TechnologyProps) {
  return <div className={styles.technology}>
    <div className={styles.main}>
      <div className={styles.head}>
        <div className={styles.image}>
          <Image src={imageURL} alt={title} fill />
        </div>
        <div className={styles.title}>
          { title }
        </div>
        <div className={styles.type}>
          { type }
        </div>
      </div>
      <div className={styles.body}>
        { body }
      </div>
      <div className={styles.buttons}>
        {projectsLink && (
          <Button link={projectsLink}>
            My Projects
          </Button>
        )}
        {moreLink && (
          <Button link={moreLink}>
            Learn More
          </Button>
        )}
      </div>
    </div>
    <div className={styles.tags}>
      <div className={styles.title}>
        Working With:
      </div>
      <Tags tags={tags} />
    </div>
  </div>
}
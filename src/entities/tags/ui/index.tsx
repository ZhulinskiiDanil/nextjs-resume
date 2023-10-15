import clsx from 'clsx'
import styles from './main.module.scss'

type TagsProps = {
  big?: boolean
  center?: boolean
  tags?: { value: string }[]
}

export function Tags({ big, center, tags }: TagsProps) {
  const classNames = clsx(styles.container, {
    [styles.big]: big,
    [styles.center]: center
  })

  if (!tags?.length) return <></>

  const tagsList = tags.map(tag => (
    <div key={tag.value} className={styles.tag}>
      <span>
        { tag.value }
      </span>
    </div>
  ))

  return <div className={classNames}>
    { tagsList }
  </div>
}
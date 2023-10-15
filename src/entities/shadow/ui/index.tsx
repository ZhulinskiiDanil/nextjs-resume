import clsx from 'clsx'
import styles from './main.module.scss'

type ShadowProps = {
  align?: "bottom" | "top"
}

export function Shadow({ align }: ShadowProps) {
  const classNames = clsx(styles.shadow, styles[align || 'top'])
  
  return <div className={classNames}></div>
}
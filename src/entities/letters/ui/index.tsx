import { useScroll } from '@/shared/hooks/useScroll'
import { useEffect, useRef } from 'react'
import styles from './main.module.scss'

export function Letters() {
  const parentRef = useRef<HTMLDivElement | null>(null)
  const { scrollY } = useScroll()

  useEffect(() => {
    const parent = parentRef.current

    if (parent) {
      parent.style.setProperty('--scrollY', String(scrollY) + 'px')
    }
  }, [scrollY, parentRef])

  return <div ref={parentRef} className={styles.container}>
    <div className={styles.letter}>
      <span data-main>Zh</span>
      <span data-stroke>Zh</span>
    </div>
    <div className={styles.letter}>
      <span data-main>D</span>
      <span data-stroke>D</span>
    </div>
    <div className={styles.letter}>
      <span data-main>R</span>
      <span data-stroke>R</span>
    </div>
  </div>
}
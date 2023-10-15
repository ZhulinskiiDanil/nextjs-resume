import { useEffect, useRef } from 'react'
import styles from './main.module.scss'

type InteractiveTitleProps = {
  title: string
}

export function InteractiveTitle({
  title
}: InteractiveTitleProps) {
  const parentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function mousemove(e: MouseEvent) {
      const x = e.clientX / window.innerWidth
      const y = (e.clientY + window.scrollY) / window.innerHeight
      const minMaxRange = (n: number) => Math.max(0, Math.min(n, 1))
      
      if (parentRef.current) {
        parentRef.current.style
          .setProperty('--clientX', String(minMaxRange(x))
          .substring(0, 6));
        parentRef.current.style
          .setProperty('--clientY', String(minMaxRange(y))
          .substring(0, 6));
      }
    }

    document.addEventListener('mousemove', mousemove)
    
    return () => {
      document.removeEventListener('mousemove', mousemove)
    }
  }, [parentRef])

  return <section ref={parentRef} className={styles.container}>
    <h2 className={styles.title}>{ title }</h2>
  </section>
}
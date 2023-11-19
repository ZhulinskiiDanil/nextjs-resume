import styles from './main.module.scss'
import { startAnimation } from '../model/startAnimation'

// Funcs
import { uuid } from '@/common/funcs/uuid'

// Hooks
import { usePreLoader } from '@/shared/hooks/useLoader'
import { useEffect, useMemo, useRef } from 'react'

type InteractiveTitleProps = {
  title: string
}

export function InteractiveTitle({
  title
}: InteractiveTitleProps) {
  const parentRef = useRef<HTMLDivElement | null>(null)
  const { onPreloader, removeListener } = usePreLoader()
  const letters = title.split('')
  const spans = useMemo(() => (
    letters.map(text => ({
      id: uuid(),
      content: text
    }))
  ), [letters])

  // GSAP Animations
  useEffect(() => {
    if (parentRef.current) {
      const listener = onPreloader('end', () => {
        if (parentRef.current) {
          startAnimation(parentRef.current)
        }
      })

      return () => {
        removeListener(listener)
      }
    }
  }, [parentRef.current])

  // Looking for cursor
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
    <div className={styles.title}>
      <div data-line className={styles.line}></div>
      {spans.map(span => (
        <span key={span.id}>
          { span.content }
        </span>
      ))}
    </div>
  </section>
}
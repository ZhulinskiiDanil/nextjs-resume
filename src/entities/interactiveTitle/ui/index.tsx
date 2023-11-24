import styles from './main.module.scss'
import { defineAnimationTL } from '../model/defineAnimationTL'

// Funcs
import { uuid } from '@/common/funcs/uuid'

// Hooks
import { usePreLoader } from '@/shared/hooks/useLoader'
import { useEffect, useMemo, useRef } from 'react'
import { useGSAP } from '@gsap/react'

type InteractiveTitleProps = {
  title: string
}

export function InteractiveTitle({
  title
}: InteractiveTitleProps) {
  const { onPreloader } = usePreLoader()
  const parentRef = useRef<HTMLDivElement | null>(null)
  const spans = useMemo(() => {
    const letters = title.split('')

    return letters.map(text => ({
      id: uuid(),
      content: text
    }))
  }, [title])

  useGSAP(() => {
    if (parentRef.current) {
      const tl = defineAnimationTL(parentRef.current)
      onPreloader('end', () => {
        tl.play()
      }, { once: true })
    }
  }, [], parentRef)

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
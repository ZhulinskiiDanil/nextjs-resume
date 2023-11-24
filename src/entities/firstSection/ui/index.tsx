import styles from './main.module.scss'
import clsx from 'clsx'
import gsap from 'gsap'

// Hooks
import { usePreLoader } from '@/shared/hooks/useLoader'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

// Components
import { InteractiveTitle } from '@/entities/interactiveTitle/ui'

export function FirstSection() {
  return <section className={styles.container}>
    <InteractiveTitle title='RESUME'/>
    <div
      className={styles.lineWrap}
      style={{ marginTop: '-20vh' }}
    >
      <AnimatedLine />
    </div>
    <div
      className={styles.lineWrap}
      style={{ marginTop: '20vh' }}
    >
      <AnimatedLine reverse />
    </div>
    <button className={styles.button}>
      Download <span>PDF</span>
    </button>
  </section>
}

function AnimatedLine({ reverse }: { reverse?: boolean }) {
  const { onPreloader } = usePreLoader()
  const pathRef = useRef<SVGPathElement>(null)

  useGSAP(() => {
    const path = pathRef.current

    if (path) {
      const tl = gsap.timeline({
        paused: true
      }).to(path, {
        duration: 3,
        strokeDasharray: 2000,
        stroke: 'yellow',
        opacity: 0
      })

      const listener = onPreloader('end', () => {
        tl.play()
      }, { once: true })
    }
  }, [], pathRef)

  return (
    <svg className={clsx([
      styles.line, reverse && styles.reverse
    ])} xmlns="http://www.w3.org/2000/svg" width="2186" height="361" viewBox="0 0 2186 361" fill="none">
      <path
        ref={pathRef}
        d="M0.999939 357.694C520.074 365.014 700.801 30.7187 1142.75 4.75597C1584.69 -21.2068 1755.28 260.38 2185.55 266.035"
        stroke="#6AFF5E"
        strokeWidth="5"
      />
    </svg>
  )
}
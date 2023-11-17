import styles from './main.module.scss'
import clsx from 'clsx'

// Components
import { InteractiveTitle } from '@/entities/interactiveTitle/ui'
import { Tween } from 'react-gsap'

export function FirstSection() {
  return <section className={styles.container}>
    <InteractiveTitle title='RESUME'/>
    <div
      className={styles.lineWrap}
      style={{ marginTop: '-10vh' }}
    >
      <AnimatedLine />
    </div>
    <div
      className={styles.lineWrap}
      style={{ marginTop: '30vh' }}
    >
      <AnimatedLine reverse />
    </div>
    <button className={styles.button}>
      Download <span>PDF</span>
    </button>
  </section>
}

function AnimatedLine({ reverse }: { reverse?: boolean }) {
  return (
    <svg className={clsx([
      styles.line,
      reverse && styles.reverse
    ])} xmlns="http://www.w3.org/2000/svg" width="2186" height="361" viewBox="0 0 2186 361" fill="none">
      <Tween
        delay={1.5}
        from={{ svgDraw: [0, 0] }}
        to={{ svgDraw: [1, 1] }}
      >
        <path d="M0.999939 357.694C520.074 365.014 700.801 30.7187 1142.75 4.75597C1584.69 -21.2068 1755.28 260.38 2185.55 266.035" stroke="#6AFF5E" strokeWidth="5"/>
      </Tween>
    </svg>
  )
}
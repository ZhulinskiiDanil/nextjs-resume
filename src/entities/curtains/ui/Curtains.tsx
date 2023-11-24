import styles from './main.module.scss'
import gsap from 'gsap'

// Hooks
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export function Curtains() {
  const curtainsRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    const curtains = curtainsRef.current

    if (curtains) {
      const q = gsap.utils.selector(curtains),
        curtain1 = q('[data-curtain]:nth-child(1)'),
        curtain2 = q('[data-curtain]:nth-child(2)'),
        curtain3 = q('[data-curtain]:nth-child(3)'),
        curtain4 = q('[data-curtain]:nth-child(4)')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: curtains,
          start: 'top center',
          end: 'bottom-=50% center',
          scrub: true,
          onEnter() {
            curtains.classList.add(styles.active)
          },
          onLeaveBack() {
            curtains.classList.remove(styles.active)
          }
        }
      })
      
      // Inner
      tl.fromTo(curtain1, {
        filter: 'opacity(0) grayscale(100%) blur(100px)',
        rotate: 30,
        y: '-100vh'
      }, {
        filter: 'opacity(1) grayscale(0%) blur(0px)',
        rotate: 0,
        y: '0vh'
      })
      .fromTo(curtain2, {
        filter: 'opacity(0) grayscale(100%) blur(100px)',
        rotate: 30,
        y: '200vh'
      }, {
        filter: 'opacity(1) grayscale(0%) blur(0px)',
        rotate: 0,
        y: '50vh'
      }, '<')

      // Out
      tl.fromTo(curtain3, {
        filter: 'opacity(0) grayscale(100%)',
        rotate: -40,
        y: '-100vh'
      }, {
        filter: 'opacity(1) grayscale(0%)',
        rotate: 0,
        y: '0vh'
      }, 'start-=.4')
      .fromTo(curtain4, {
        filter: 'opacity(0) grayscale(100%)',
        rotate: -40,
        y: '200vh'
      }, {
        filter: 'opacity(1) grayscale(0%)',
        rotate: 0,
        y: '50vh'
      }, '<')
    }
  }, [], curtainsRef)

  return <div ref={curtainsRef} className={styles.curtains}>
    <div data-curtain className={styles.curtain}></div>
    <div data-curtain className={styles.curtain}></div>
    <div data-curtain className={styles.curtain}></div>
    <div data-curtain className={styles.curtain}></div>
  </div>
}
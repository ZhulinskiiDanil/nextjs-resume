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
      const tweensFromTo: gsap.TweenVars[] = [{
        filter: 'blur(300px) opacity(0) grayscale(100%)',
        rotate: 30,
        paused: true
      }, {
        filter: 'blur(0px) opacity(1) grayscale(0%)',
        rotate: 0,
        paused: true
      }]
      const q = gsap.utils.selector(curtains),
        first = q('[data-curtain-first]'),
        second = q('[data-curtain-second]')

      const firstTweenTo = gsap.fromTo(first, {
        ...tweensFromTo[0],
        y: '-100vh'
      }, {
        ...tweensFromTo[1],
        y: '0vh'
      })

      const secondTweenTo = gsap.fromTo(second, {
        ...tweensFromTo[0],
        y: '200vh'
      }, {
        ...tweensFromTo[1],
        y: '50vh'
      })

      const action = gsap.set(curtains, {
        visibility: 'visible',
        paused: true
      })

      gsap.timeline({
        scrollTrigger: {
          trigger: curtains,
          start: 'top center',
          end: 'bottom-=50% center',
          scrub: true,
          onEnter: () => action.play(),
          onLeaveBack: () => action.reverse(),
          onUpdate: (self) => {
            firstTweenTo.progress(self.progress)
            secondTweenTo.progress(self.progress)
          }
        }
      })
    }
  }, [], curtainsRef)

  return <div ref={curtainsRef} className={styles.curtains}>
    <div data-curtain-first className={styles.curtain}></div>
    <div data-curtain-second className={styles.curtain}></div>
  </div>
}
import styles from './main.module.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// Hooks
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export function Letters() {
  const parentRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (parentRef.current) {
      const q = gsap.utils.selector(parentRef.current),
        letters = q('[data-letter')
  
      gsap.timeline()
        .set(letters, {
          scale: 'random(.5, .8)',
          rotate: 'random(-90, 90)',
          opacity: 0
        }).to(letters, {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 3,
          stagger: .5
        })

      gsap.registerPlugin(ScrollTrigger)
      gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      }).fromTo(letters, {
        opacity: 1,
        scale: 1
      }, {
        top: '+=random(80, 180)vh',
        opacity: 0,
        scale: 'random(.5, .8)',
        rotate: 'random(-45, 45)'
      })
    }
  }, [parentRef], parentRef)

  return <div ref={parentRef} className={styles.container}>
    <div data-letter className={styles.letter}>
      <span data-main>Zh</span>
      <span data-stroke>Zh</span>
    </div>
    <div data-letter className={styles.letter}>
      <span data-main>D</span>
      <span data-stroke>D</span>
    </div>
    <div data-letter className={styles.letter}>
      <span data-main>R</span>
      <span data-stroke>R</span>
    </div>
  </div>
}
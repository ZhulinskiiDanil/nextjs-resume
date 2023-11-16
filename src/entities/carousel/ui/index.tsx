import styles from './main.module.scss'

// Hooks
import { useEffect, useRef } from 'react'

export function Carousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onScroll() {
      const elm = carouselRef.current
      if (!elm) return
      
      const { y, height } = elm.getBoundingClientRect()

      if (y - window.innerHeight / 2 < 0) {
        elm.setAttribute('data-active', '')
      } else {
        elm.removeAttribute('data-active')
      }
      
      if (y < 0) {
        const top = Math.abs(y)
        const progress = Math.floor( // 0.00 - 1.00
          Math.min(
            Math.max(
              top / (height - window.innerHeight), 0
            ), 1
          ) * 100
        ) / 100

        elm.style.setProperty('--progress', String(progress))
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [carouselRef])

  return <div ref={carouselRef} className={styles.carousel}>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {/* 10 Elements */}
        <CarouselText pre="Figma" sub="/App For Design" />
        <CarouselText pre="Nest" sub=".js Framework" />
        <CarouselText pre="Node.js" sub="/Express" />
        <CarouselText pre="REST" sub="/GraphQL" />
        <CarouselText pre="Vue.js" sub="/Nuxt.js" />
        <CarouselText pre="React.js" sub="/Next.js" />
        <CarouselText pre="Reduxjs" sub="/toolkit" />
        <CarouselText pre="TypeScript" sub="/JavaScript" />
        <CarouselText pre="FrontEnd" sub="Developer" />
        <CarouselText pre="Zhulinskiy" sub="Danil" />
      </div>
    </div>
  </div>
}

function CarouselText({ pre, sub }: { pre: string, sub: string }) {
  return <div data-cursor-chaser className={styles.text}>
    <div className={styles.value}>
      <span className={styles.pre}>{ pre }</span>
      <span className={styles.sub}>{ sub }</span>
    </div>
  </div>
}
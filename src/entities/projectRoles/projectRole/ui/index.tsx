import styles from './main.module.scss'

// Components
import Image from 'next/image'
import { useEffect, useRef } from 'react'

type ProjectRoleProps = {
  title: string
  subtitle: string
  imageURL: string
}

export function ProjectRole({
  title, subtitle, imageURL
}: ProjectRoleProps) {
  const parentRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const parent = parentRef.current

    function offset(el: HTMLElement) {
      const rect = el.getBoundingClientRect(),
      
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      return { top: rect.top, left: rect.left + scrollLeft }
    }

    function mousemove(e: MouseEvent) {
      if (parent) {
        const coords = offset(parent)
        const x = e.clientX - coords.left
        const y = e.clientY - coords.top

        parent.style.setProperty('--offsetX', x + 'px')
        parent.style.setProperty('--offsetY', y + 'px')
      }
    }

    if (parent) {
      parent.addEventListener('mousemove', mousemove)

      return () => {
        parent.removeEventListener('mousemove', mousemove)
      }
    }
  }, [parentRef])

  return <div ref={parentRef} data-cursor-chaser className={styles.container}>
    <div className={styles.shadow}></div>
    <div className={styles.image}>
      <Image src={imageURL} alt={title} fill />
    </div>
    <div className={styles.data}>
      <div className={styles.title}>
        { title }
      </div>
      <div className={styles.subtitle}>
        { subtitle }
      </div>
    </div>
  </div>
}
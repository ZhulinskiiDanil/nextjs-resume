'use client';
import styles from './main.module.scss'
import { useEffect, useRef, useState } from 'react'

export function CursorChaser() {
  const [mousedown, setMousedown] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function mouseMoveHandler(e: MouseEvent) {
      if (ref.current) {
        ref.current.style.setProperty('--clientX', `${e.clientX}px`)
        ref.current.style.setProperty('--clientY', `${e.clientY}px`)
      }
    }

    function mouseDownHandler() {
      setMousedown(true)
    }

    function mouseUpHandler() {
      setMousedown(false)
    }

    document.addEventListener('mousedown', mouseDownHandler)
    document.addEventListener('mouseup', mouseUpHandler)
    document.addEventListener("mousemove", mouseMoveHandler)

    return () => {
      document.removeEventListener('mousedown', mouseDownHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
      document.removeEventListener("mousemove", mouseMoveHandler)
    }
  }, [ref.current])

  return <div ref={ref} className={[
    styles.container,
    mousedown ? styles.mousedown : ''
  ].join(' ')}>
    <div className={styles.chaser}></div>
    <div className={styles.smoothChaser}></div>
  </div>
}
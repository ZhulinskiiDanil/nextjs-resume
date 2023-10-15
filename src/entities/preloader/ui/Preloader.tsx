import styles from './main.module.scss'

// Components
import Image from 'next/image'

// Hooks
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement | null>(null)
  const [vissible, setVissible] = useState(true)

  useLayoutEffect(() => {
    setTimeout(() => {
      setVissible(false)
    }, 3000)
  }, [])

  if (!vissible) return <></>
  return <div ref={preloaderRef} className={styles.preloader}>
    <div className={styles.circle} />
    <p className={styles.logo}>
      <Image
        src="/icons/reactjs.png"
        alt="Logo"
        fill
      />
    </p>
  </div>
}
'use client';
import styles from './main.module.scss'

// Components
import Image from 'next/image'

// Hooks
import { useEffect, useRef } from 'react'
import { usePreLoader } from '@/shared/hooks/useLoader'

export function Preloader() {
  const preloaderRef = useRef<HTMLDivElement | null>(null)
  const { emit } = usePreLoader()

  useEffect(() => {
    setTimeout(() => {
      emit('end')
    }, 3000)
  }, [])

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
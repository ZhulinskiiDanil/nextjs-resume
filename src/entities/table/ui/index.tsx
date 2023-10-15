import { Button } from '@/shared/ui'
import { useEffect, useRef, useState } from 'react'
import styles from './main.module.scss'

type TableProps = {
  
}

export function Table({}: TableProps) {
  const tableRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const table = tableRef.current

    function mousemove(e: MouseEvent) {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      if (table) {
        table.style
          .setProperty('--clientX', String(x).substring(0, 6))
        table.style
          .setProperty('--clientY', String(y).substring(0, 6))
      }
    }

    document.addEventListener('mousemove', mousemove)
    return () => {
      document.removeEventListener('mousemove', mousemove)
    }
  }, [tableRef])

  return <div ref={tableRef} className={styles.table}>
    <div className={styles.list}>
      <Cell keyTitle="Name" value="Zhulinskiy Danil" />
      <Cell keyTitle="English" value="A2" />
    </div>
  </div>
}

function Cell({
  keyTitle, value
}: { keyTitle: string, value: string }) {
  const [copied, setCopied] = useState(false)

  async function copyText() {
    navigator.clipboard.writeText(`${keyTitle}: ${value}`)

    setCopied(true)
    setTimeout(() => setCopied(false), 1000);
  }

  return <div className={styles.cell}>
    <div className={styles.top}></div>
    <div className={styles.left}></div>
    <div className={styles.right}></div>
    <div className={styles.bottom}></div>
    <div className={styles.key}>
      { keyTitle }
    </div>
    <div className={styles.value}>
      { value }
    </div>
    <div className={styles.copy}>
      <Button onClick={copyText} type='light' mini>
        { copied ? "Copied" : "Copy" }
      </Button>
    </div>
  </div>
  }
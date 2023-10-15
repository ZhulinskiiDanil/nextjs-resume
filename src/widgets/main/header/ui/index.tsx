import styles from './main.module.scss'

// Components
import { Button } from '@/shared/ui'

export default function Header() {
  return <header className={styles.header}>
    <div className={styles.cw}>
      <div className={styles.title}>
        <span data-main>RESUME</span>
        <span data-name>Zhulinskiy D. R.</span>
      </div>
      <div className={styles.buttons}>
        <Button link="/contacts">
          Contacts
        </Button>
        <Button link="/about">
          About
        </Button>
        <Button beta link="https://t.me/ZhulinskiiDanil">
          Portfolio
        </Button>
      </div>
    </div>
  </header>
}
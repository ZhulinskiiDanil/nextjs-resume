import styles from './styles/page.module.scss'

// Components
import { Content, Footer, Header } from '@/shared/layout/components'
import { PageLayout } from '@/shared/libs/layout'

function Component() {
  return <div className={styles.container}>
    Hello world
  </div>
}

export default PageLayout(
  Component, {
    imports: () => [
      Header,
      Content,
      Footer,
    ],
    settings: []
  }
)
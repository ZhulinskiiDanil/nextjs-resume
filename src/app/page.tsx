'use client'
import styles from './styles/page.module.scss'

// Hooks
import { usePathname } from 'next/navigation'

// Components
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'
import { FirstSection } from '@/entities/firstSection/ui'
import { Letters } from '@/entities/letters/ui'
import { Shadow } from '@/entities/shadow/ui'
import { SectionTitle } from '@/entities/sectionTitle/ui'
import { Section } from '@/entities/section/ui'
import { ProjectRoles } from '@/entities/projectRoles/ui'
import { Technologys } from '@/entities/technologys/ui'
import { ScrollProgressBar } from '@/entities/scrollProgressBar/ui/ScrollProgressBar'
import { Preloader } from '@/entities/preloader/ui/Preloader'
import { Carousel } from '@/entities/carousel/ui'
import { Curtains } from '@/entities/curtains/ui/Curtains'
import { useEffect } from 'react'

function Component() {
  const pathname = usePathname()
  
  useEffect(() => {
    fetch(`${pathname}api/hello`)
  }, [])

  return <div className={styles.container}>
    <Letters />
    <Preloader />
    <ScrollProgressBar />
    <Shadow align='top' />
    <FirstSection />
    <div className={styles.content}>
      <Section>
        <SectionTitle title='Roles' />
        <ProjectRoles />
        <Technologys />
      </Section>
      <Section>
        <Carousel />
      </Section>
      <Curtains />
    </div>
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
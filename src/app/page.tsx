'use client'
import styles from './styles/page.module.scss'
import { PageLayout } from '@layout'
import { Header, Footer, Content } from '@layout/components'
import { FirstSection } from '@/entities/firstSection/ui'
import { Letters } from '@/entities/letters/ui'
import { Shadow } from '@/entities/shadow/ui'
import { SectionTitle } from '@/entities/sectionTitle/ui'
import { Section } from '@/entities/section/ui'
import { ProjectRoles } from '@/entities/projectRoles/ui'
import { Technologys } from '@/entities/technologys/ui'
import { Tags } from '@/entities/tags/ui'
import { ScrollProgressBar } from '@/entities/scrollProgressBar/ui/ScrollProgressBar'
import { Preloader } from '@/entities/preloader/ui/Preloader'
import { Table } from '@/entities/table/ui'

function Component() {
  return <div className={styles.container}>
    {/* DECOR */}
    <Letters />
    <Preloader />
    <ScrollProgressBar />
    <Shadow align='top' />
    {/* <Shadow align='bottom' /> */}

    <FirstSection />
    <div className={styles.content}>
      <Section>
        <SectionTitle title='Roles' />
        <ProjectRoles />
        <Technologys />
      </Section>
      <Section>
        <SectionTitle title='Hard Skills' />
        <Tags
          big center
          tags={[
            { value: "JavaScript" },
            { value: "TypeScript" },
            { value: "React" },
            { value: "Next" },
            { value: "SWR" },
            { value: "SSR Components" },
            { value: "REST API" },
            { value: "GraphQL" },
            { value: "Node.js" },
            { value: "Node + Express" },
            { value: "CRUD" },
            { value: "Reduxtjs/toolkit" },
            { value: "Git" },
            { value: "Conventional commits naming" },
            { value: "Clsx (React)" },
            { value: "ClassNames (React)" },
            { value: "Vue" },
            { value: "Nuxt" },
            { value: "Nest" },
            { value: "Postgress" }
          ]}
        />
      </Section>
      <Section>
        <Table />
      </Section>
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
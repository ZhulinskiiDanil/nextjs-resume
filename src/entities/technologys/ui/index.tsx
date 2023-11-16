import { Technology } from '../technology/ui'
import styles from './main.module.scss'

export function Technologys() {
  return <section data-light-cursor className={styles.technologys}>
    <Technology
      type="Framework"
      title='Next.js'
      body="Next.js is a React framework that gives you building blocks to create web applications"
      imageURL='/icons/nextjs.png'
      projectsLink="/"
      moreLink="/"
      tags={[
        { value: "Next.js 12 and 13 version" },
        { value: "Next.js api" },
        { value: "New /app directory" },
        { value: "SSR (getServerSideProps or SSR Components)" },
        { value: "SEO Optimization" }
      ]}
    />
    <Technology
      type="Library"
      title='React.js'
      body="React is an JavaScript library that is used for building user interfaces"
      imageURL='/icons/reactjs.png'
      projectsLink="/"
      moreLink="/"
      tags={[
        { value: "TypeScript" },
        { value: "Providers" },
        { value: "Context" },
        { value: "Composition" },
        { value: "Hooks" },
        { value: "Custom Hooks" },
        { value: "SWR" },
        { value: "SSR Components" },
        { value: "HOC Components" },
        { value: "Connect reduxjs/toolkit store" },
        { value: "Send REST API requests" },
        { value: "Send GraphQL API requests" },
        { value: "Teleport" },
        { value: "Rerender optimization" }
      ]}
    />
    <Technology
      type="App"
      title='Figma'
      body="Figma design is for people to create, share, and test designs for websites, mobile apps, and other digital products and experiences"
      imageURL='/icons/figma.png'
      moreLink="/"
      tags={[
        { value: "Layouts" },
        { value: "Grids" },
        { value: "Plugins" },
        { value: "Components" },
        { value: "Assets" }
      ]}
    />
  </section>
}
import { Technology } from '../technology/ui'
import styles from './main.module.scss'

export function Technologys() {
  return <section className={styles.technologys}>
    <Technology
      type="Framework"
      title='Next.js'
      body="Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."
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
      body="React is an open-source front-end JavaScript library that is used for building user interfaces, especially for single-page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook"
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
      body="Figma design is for people to create, share, and test designs for websites, mobile apps, and other digital products and experiences. It is a popular tool for designers, product managers, writers and developers and helps anyone involved in the design process contribute, give feedback, and make better decisions, faster."
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
'use client';
import styles from './main.module.scss'
import { getTextIndexByProgress } from './model/getTextByProgress';
import { uuid } from '@/common/funcs/uuid';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Components
import Image from 'next/image'
import { Button } from '@/shared/ui'
import { Tags } from '@/entities/tags/ui'

// Hooks
import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

type TechnologyProps = {
  type: string
  title: string
  body: string
  imageURL: string
  tags: { value: string }[]
  projectsLink?: string
  moreLink?: string
}

export function Technology({
  type, title, body, imageURL, tags, projectsLink, moreLink
}: TechnologyProps) {
  const technologyRef = useRef<HTMLDivElement | null>(null)
  const [activeWord, setActiveWord] = useState({
    index: -1, filled: 0
  })
  const spans = body.split(' ').map(elm => ({
    id: uuid(), content: elm
  }))

  useGSAP(() => {
    const elm = technologyRef.current
    if (!elm) return

    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elm,
        start: 'top bottom-=30%',
        end: 'top+=400 bottom-=30%',
        scrub: true,
        onUpdate: (self) => {
          elm.style.setProperty('--animationProgress', String(self.progress))
        
          const word = getTextIndexByProgress(
            spans.map(span => span.content),
            Math.min(self.progress * 1.5, 1)
          )
          
          setActiveWord({
            index: Math.max(word.index, -1),
            filled: Math.max(word.filled, 0)
          })
        }
      },
    })
    
    tl.from(elm, {
      alpha: 0,
      y: '10vh'
    })
  }, [], technologyRef)

  return <div ref={technologyRef} className={styles.technology}>
    <div className={styles.background}>
      <div data-bg-fragment></div>
      <div data-bg-fragment></div>
      <div data-bg-fragment></div>
    </div>
    <div className={styles.cw}>
      <div className={styles.main}>
        <div className={styles.head}>
          <div className={styles.image}>
            <Image src={imageURL} alt={title} fill />
          </div>
          <div className={styles.title}>
            { title }
          </div>
          <div className={styles.type}>
            { type }
          </div>
        </div>
        <div className={styles.body}>
          {spans.map((span, index) => {
            const filled = index < activeWord.index ? 1 : (
              activeWord.index === index ? activeWord.filled : 0
            ) || 0
            const style = {
              "--filled": String(filled)
            } as React.CSSProperties;

            return (
              <span
                key={span.id}
                style={style}
                className={clsx({
                  [styles.active]: index <= activeWord.index
                })}
              >
                { span.content }
              </span>
            )
          })}
        </div>
      </div>
      <div className={styles.tags}>
        <Tags tags={tags} />
      </div>
      <div className={styles.buttons}>
        {projectsLink && (
          <Button theme="light" link={projectsLink}>
            My Projects
          </Button>
        )}
        {moreLink && (
          <Button theme="light" link={moreLink}>
            Learn More
          </Button>
        )}
      </div>
    </div>
  </div>
}
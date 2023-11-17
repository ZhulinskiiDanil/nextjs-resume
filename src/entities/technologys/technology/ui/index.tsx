'use client';
import styles from './main.module.scss'
import clsx from 'clsx';
import { getTextIndexByProgress } from './model/getTextByProgress';
import { uuid } from '@/common/funcs/uuid';

// Components
import Image from 'next/image'
import { Button } from '@/shared/ui'
import { Tags } from '@/entities/tags/ui'

// Hooks
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';

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

  useEffect(() => {
    const elm = technologyRef.current
    if (!elm) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elm,
        start: '-25% center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          elm.style.setProperty('--animationProgress', String(self.progress))
        }
      },
    })

    const tm = setTimeout(() => {
      tl.from(elm, {
        opacity: 0,
        top: '20vh'
      })
    
      tl.to(elm, {
        opacity: 1,
        top: 0
      });
    }, 250)

    return () => {
      clearTimeout(tm)
      tl.remove(tl)
    }
  }, [technologyRef])

  useEffect(() => {
    function onScroll() {
      const elm = technologyRef.current
      if (!elm) return
      
      const { y } = elm.getBoundingClientRect()
      const height = window.innerHeight / 2
      
      if (y - window.innerHeight / 2 < 0) {
        elm.setAttribute('data-active', '')
      } else {
        elm.removeAttribute('data-active')
      }
      
      if (y - window.innerHeight / 2.5 < 0) {
        const top = Math.abs(y - window.innerHeight / 2.5)
        const topToProgress = gsap.utils.mapRange(0, height, 0, 1)
        const progress = Math.min(topToProgress(top), 1)

        const word = getTextIndexByProgress(
          spans.map(span => span.content), progress
        )
        
        setActiveWord({
          index: Math.max(word.index, -1),
          filled: Math.max(word.filled, 0)
        })
        elm.style.setProperty('--progress', String(progress))
      } else {
        setActiveWord({ index: 0, filled: 0 })
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [technologyRef, spans])

  return <div ref={technologyRef} className={styles.technology}>
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
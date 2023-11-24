import gsap from "gsap"

export function defineAnimationTL(div: HTMLDivElement) {
  const { line, spans } = defineChildrens(div)

  gsap.set(line, {
    opacity: 0,
    width: 0
  })

  gsap.set(spans, {
    top: 'random(-100, 100)',
    left: 'random(-100, 100)',
    rotate: 'random(-70, 70)',
    opacity: 0
  })

  const tl = gsap.timeline({
    paused: true
  }).to(spans, {
      top: 0,
      left: 0,
      opacity: 1,
      rotate: 0,
      duration: 2,
      ease: 'elastic.out(1,0.3)',
      stagger: {
        each: .2,
        from: 'random'
      }
    })
    .to(line, {
      delay: -3,
      duration: 2,
      opacity: .5,
      width: '100%'
    })

  return tl
}

function defineChildrens(div: HTMLDivElement) {
  const q = gsap.utils.selector(div)
  const spans = q('span')
  const line = q('[data-line]')

  return {
    parent: div, spans, line
  }
}
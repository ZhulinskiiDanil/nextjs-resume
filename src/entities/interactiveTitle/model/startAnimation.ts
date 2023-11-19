import gsap from "gsap"

let mainTL = gsap.timeline()
export function startAnimation(div: HTMLDivElement) {
  mainTL.kill()
  const { line, spans } = defineChildrens(div)
  
  mainTL = gsap.timeline()
  
  mainTL.to(line, {
    duration: 0,
    opacity: 0,
    width: 0
  })

  mainTL.to(spans, {
    top: 'random(-100, 100)',
    left: 'random(-100, 100)',
    rotate: 'random(-70, 70)',
    duration: 0,
    opacity: 0
  })

  mainTL.to(spans, {
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

  mainTL.to(line, {
    delay: -3,
    duration: 2,
    opacity: .5,
    width: '100%',
    onComplete() {
      infiniteAnimation(div)
    }
  })
}

let infiniteAnimationTL = gsap.timeline()
function infiniteAnimation(div: HTMLDivElement) {
  infiniteAnimationTL.kill()
  // const { line, spans } = defineChildrens(div)

  // TODO: Animate letters
}

function defineChildrens(div: HTMLDivElement) {
  const spans = div.querySelectorAll('span')
  const line = div.querySelector('[data-line]')

  return {
    parent: div, spans, line
  }
}
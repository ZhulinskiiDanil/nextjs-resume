import gsap from "gsap"

let isStarted = false
export function startAnimation(div: HTMLDivElement) {
  if (isStarted) return
  isStarted = true

  const spans = div.querySelectorAll('span')
  const line = div.querySelector('[data-line]')
  const tl = gsap.timeline()
  
  tl.to(line, {
    duration: 0,
    opacity: 0,
    width: 0
  })

  tl.to(spans, {
    top: 'random(-100, 100)',
    left: 'random(-100, 100)',
    rotate: 'random(-70, 70)',
    duration: 0,
    opacity: 0
  })

  tl.to(spans, {
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

  tl.to(line, {
    delay: -3,
    duration: 2,
    opacity: .5,
    width: '100%'
  })
}
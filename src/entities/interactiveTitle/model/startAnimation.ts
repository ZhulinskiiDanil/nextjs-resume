import gsap from "gsap"

export function startAnimation(div: HTMLDivElement) {
  const spans = div.querySelectorAll('span')
  const line = div.querySelector('[data-line]')
  
  const tl = gsap.timeline({ delay: 1 }) // With preloader delay

  tl.to(line, {
    duration: 0,
    opacity: 0,
    width: 0
  })

  tl.to(spans, {
    top: 'random(-200, 200)',
    left: 'random(-200, 200)',
    rotate: 'random(-70, 70)',
    duration: 0,
    opacity: 0
  })

  tl.to(spans, {
    top: 0,
    left: 0,
    opacity: 1,
    rotate: 0,
    direction: 6,
    stagger: {
      amount: 1,
      from: 'random'
    }
  })

  tl.to(line, {
    delay: -1.5,
    duration: 2,
    opacity: .5,
    width: '100%'
  })
}
import gsap from "gsap";

function getProgressInRange(from: number, to: number, curr: number) {
  return gsap.utils.mapRange(from, to, 0, 1)(curr)
}

export function getTextIndexByProgress(
  texts: string[],
  progress: number // 0 - 1
) {
  const lengthSum = texts.reduce((acc, elm) => acc + elm.length, 0)
  const pointer = lengthSum * progress
  
  let textLengthSum = 0;
  let filled = 0;
  const resultWordIndex = texts.findIndex((text, index) => {
    const from = textLengthSum
    const to = textLengthSum + text.length
    const curr = pointer
    textLengthSum = to
    
    if (textLengthSum >= pointer) {
      filled = getProgressInRange(from, to, curr)
      return true
    }
  })
  
  return {
    filled,
    index: resultWordIndex
  }
}
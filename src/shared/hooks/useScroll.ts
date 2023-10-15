import { useEffect, useState } from "react";

interface IScrollData {
  scrollY: number, ready: number
}

export const useScroll = (
  cb?: (scrollData: IScrollData) => boolean | void,
  dependency?: React.DependencyList | undefined
) => {
  const [scroll, setScrollPosition] = useState<IScrollData>({
    scrollY: 0, ready: 0
  });

  function getScrollData() {
    return {
      scrollY: window.scrollY,
      ready: window.scrollY / (document.body.scrollHeight - window.innerHeight)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollData = getScrollData()

      if (cb instanceof Function) {
        const cbResult = cb(scrollData)

        if (cbResult) {
          setScrollPosition(scrollData);
        }
      } else {
        setScrollPosition(scrollData);
      }
    };
  
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, dependency)

  useEffect(() => {
    if (cb instanceof Function) cb(getScrollData())
  }, dependency)

  return scroll
};
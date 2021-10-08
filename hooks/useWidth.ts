import { useEffect, useState } from 'react'

export default function useWidth() {
  const [width, setWidth] = useState<number>(0)

  const getWidthHandler = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    getWidthHandler()
    window.addEventListener('resize', getWidthHandler)

    return () => window.removeEventListener('resize', getWidthHandler)
  }, [])

  return { width }
}

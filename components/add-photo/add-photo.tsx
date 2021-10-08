import { useEffect, useState } from 'react'

export default function AddPhoto({ onClickHandler }: Props) {
  const [width, setWidth] = useState<number>(0)

  const getWidthHandler = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    getWidthHandler()
    window.addEventListener('resize', getWidthHandler)

    return () => window.removeEventListener('resize', getWidthHandler)
  }, [])

  return (
    <button
      className='bg-[#3DB46D] ml-auto px-[7px] xs:py-4 xs:px-5 font-bold text-base text-white rounded-[50%] xs:rounded-xl sm[500px]:rounded shadow-addphotobtn border-0 outline-none'
      onClick={onClickHandler}
    >
      {width >= 500 ? 'Add photo' : '+'}
    </button>
  )
}

type Props = {
  onClickHandler: () => void
}

import Image from 'next/image'
import { useState } from 'react'

export default function ImageItem({ url, label }: Props) {
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false)

  return (
    <div
      className=' relative w-full h-[250px] '
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
    >
      <Image
        className='rounded-xl'
        src={url}
        alt={`An Image with label ${label}`}
        objectFit='cover'
        layout='fill'
      />
      {isMouseEntered && <div className='rounded-xl absolute inset-0 z-10 bg-[#000] opacity-40' />}
      {isMouseEntered && (
        <p className='max-w-[270px] z-10 absolute font-bold text-lg text-white left-[24px] bottom-[30px]'>
          {label}
        </p>
      )}
      <button className='absolute z-10 top-[18px] right-[18px]'>delete</button>
    </div>
  )
}

type Props = {
  url: string
  label: string
}

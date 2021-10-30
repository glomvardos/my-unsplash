import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ImageItem({ url, label }: Props) {
  const [isMouseEntered, setIsMouseEntered] = useState<boolean>(false)
  const router = useRouter()

  const deleteHandler = async () => {
    const response = await fetch(`/api/deleteImage`, {
      method: 'POST',
      body: JSON.stringify({ label }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.ok) {
      router.reload()
    }
  }

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
      {isMouseEntered && (
        <button
          type='button'
          className='absolute z-10 text-xs font-medium border border-solid border-[#EB5757] px-[15px] py-[5px] rounded-[38px] top-[18px] right-[18px] text-[#EB5757]'
          onClick={deleteHandler}
        >
          delete
        </button>
      )}
    </div>
  )
}

type Props = {
  url: string
  label: string
}

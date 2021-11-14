import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { Properties } from '../interfaces/images.interface'

export default function Search({ images, setAllImages }: Props) {
  const [enteredInput, setEnteredInput] = useState<string>('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value !== '') {
      const labelResults = images.filter(image =>
        image.label.toLowerCase().startsWith(value.toLowerCase())
      )
      setAllImages(labelResults)
    } else {
      setAllImages(images)
    }

    setEnteredInput(value)
  }

  return (
    <div className='flex items-center w-[160px] xs:w-[200px] sm:w-[300px] ml-5 sm:ml-10 py-1 xs:py-[14px] px-2 sm:px-5 border-[1px] rounded-xl border-[#BDBDBD]'>
      <BiSearchAlt2 className='text-[#BDBDBD] text-lg xs:text-2xl font-medium' />
      <input
        className='w-full font-normal text-base outline-none ml-2 sm:ml-5 text-[#4F4F4F]'
        type='text'
        placeholder='Search by name'
        value={enteredInput}
        onChange={handleSearch}
      />
    </div>
  )
}

type Props = {
  images: Array<Properties>
  setAllImages: (results: Properties[]) => void
}

import { BiSearchAlt2 } from 'react-icons/bi'

export default function Search() {
  return (
    <div className='flex items-center w-[160px] ml-5 py-1 px-2 border-[1px] rounded-xl border-[#BDBDBD]'>
      <BiSearchAlt2 className='text-[#BDBDBD] text-lg' />
      <input
        className='w-full font-normal text-base outline-none ml-2 text-[#4F4F4F]'
        type='text'
        placeholder='Search by name'
      />
    </div>
  )
}

import useWidth from '../../hooks/useWidth'

export default function AddPhotoBtn({ onClickHandler }: Props) {
  const { width } = useWidth()

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

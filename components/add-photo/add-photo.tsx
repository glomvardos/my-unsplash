export default function AddPhoto({ onClickHandler }: Props) {
  return (
    <button
      className='bg-[#3DB46D] ml-auto px-[7px] font-bold text-base text-white rounded-[50%] shadow-addphotobtn border-0 outline-none'
      onClick={onClickHandler}
    >
      +
    </button>
  )
}

type Props = {
  onClickHandler: () => void
}

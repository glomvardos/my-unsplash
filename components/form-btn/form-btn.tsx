export default function FormBtn({ text, onClickHandler }: Props) {
  let classes
  // Style for Submit button
  if (text === 'Submit') {
    classes = 'bg-[#3DB46D] text-white py-4 px-6 rounded-xl shadow-addphotobtn font-bold'
  }

  // Style for Delete button
  if (text === 'Delete') {
  }

  // Style for Cancel button
  if (text === 'Cancel') {
    classes = 'bg-transparent text-[#BDBDBD] mr-6'
  }

  return (
    <button onClick={onClickHandler} className={`cursor-pointer ${classes}`}>
      {text}
    </button>
  )
}

type Props = {
  text: string
  onClickHandler: () => void
}

import ReactDOM from 'react-dom'

export default function Modal({ children, onClickHandler }: Props) {
  const overlay = document.getElementById('overlay') as HTMLElement
  return (
    <>
      {ReactDOM.createPortal(
        <div
          onClick={onClickHandler}
          className='fixed inset-0 w-full h-full bg-black opacity-10 z-10'
        />,
        overlay
      )}
      {ReactDOM.createPortal(
        <div className='fixed max-w-[340px] xs:max-w-[450px] sm:max-w-[620px] w-full bg-white rounded-xl p-6 z-20 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4'>
          {children}
        </div>,
        overlay
      )}
    </>
  )
}

type Props = {
  children: JSX.Element[] | JSX.Element
  onClickHandler: () => void
}

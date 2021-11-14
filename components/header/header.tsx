import { useContext } from 'react'
import { store } from '../../context/store'
import AddPhotoBtn from '../add-photo-btn/add-photo-btn'
import Logo from '../logo/logo'
import Search from '../search/search'
import { Properties } from '../interfaces/images.interface'

export default function Header({ images, setAllImages }: Props) {
  const { showModalHandler } = useContext(store)
  return (
    <header className='flex items-center'>
      <Logo />
      <Search images={images} setAllImages={setAllImages} />
      <AddPhotoBtn onClickHandler={showModalHandler} />
    </header>
  )
}

type Props = {
  images: Array<Properties>
  setAllImages: (results: Properties[]) => void
}

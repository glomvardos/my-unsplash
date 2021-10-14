import { useContext } from 'react'
import { store } from '../../context/store'
import AddPhotoBtn from '../add-photo-btn/add-photo-btn'
import Logo from '../logo/logo'
import Search from '../search/search'

export default function Header() {
  const { showModalHandler } = useContext(store)
  return (
    <header className='flex items-center'>
      <Logo />
      <Search />
      <AddPhotoBtn onClickHandler={showModalHandler} />
    </header>
  )
}

import AddPhoto from '../add-photo/add-photo'
import Logo from '../logo/logo'
import Search from '../search/search'

export default function Header() {
  return (
    <header className='flex items-center'>
      <Logo />
      <Search />
      <AddPhoto />
    </header>
  )
}

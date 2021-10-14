import type { NextPage } from 'next'
import { useContext } from 'react'
import Header from '../components/header/header'
import AddNewPhoto from '../components/add-new-photo/add-new-photo'
import { store } from '../context/store'

const Home: NextPage = () => {
  const { showModal } = useContext(store)
  return (
    <>
      {showModal && <AddNewPhoto />}
      <Header />
    </>
  )
}

export default Home

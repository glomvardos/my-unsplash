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

export async function getStaticProps() {
  const response = await fetch(
    `https://${process.env.API_KEY}:${process.env.API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image/upload?prefix=unsplash`
  )

  const data = await response.json()

  return {
    props: {},
    revalidate: 1,
  }
}

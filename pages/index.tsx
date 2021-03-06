import type { NextPage } from 'next'
import { useContext, useState } from 'react'
import Header from '../components/header/header'
import AddNewPhoto from '../components/add-new-photo/add-new-photo'
import { store } from '../context/store'
import Images from '../components/images/images'

import { Properties } from '../components/interfaces/images.interface'

const Home: NextPage = ({ images }: any) => {
  const { showModal } = useContext(store)
  const [allImages, setAllImages] = useState<Properties[]>(images)

  return (
    <>
      {showModal && <AddNewPhoto />}
      <Header images={images} setAllImages={setAllImages} />
      <Images images={allImages} />
    </>
  )
}

export default Home

export async function getServerSideProps() {
  const response = await fetch(
    `https://${process.env.API_KEY}:${process.env.API_SECRET}@api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/resources/image/upload?prefix=unsplash`
  )

  const data = await response.json()
  const transformedData = data.resources
    .map((img: any) => {
      const dateTimeArr = img.created_at.split('T')
      const publicLabel = img.public_id.split('/')
      return {
        id: img.asset_id,
        label: publicLabel[1],
        url: img.secure_url,
        date: dateTimeArr[0],
        time: dateTimeArr[1].replace('Z', ''),
      }
    })
    .sort((a: any, b: any) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time))

  return {
    props: {
      images: transformedData,
    },
  }
}

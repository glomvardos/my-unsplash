const FormData = require('form-data')
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
    return
  }

  const { label, imgUrl } = req.body

  if (label.trim() === '' || imgUrl.trim() === '') {
    res.status(422).json({ message: 'Invalid input' })
    return
  }

  const data = new FormData()
  data.append('file', imgUrl)
  data.append('upload_preset', 'unsplash')
  data.append('folder', 'unsplash')
  data.append('filename_override', label)
  data.append('cloud_name', `${process.env.CLOUD_NAME}`)

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUD_NAME}/image/upload`,
    {
      method: 'POST',
      body: data,
    }
  )

  const image = await response.json()

  if (response.status !== 200) {
    res.status(response.status).json({ message: image })
    return
  }

  res.status(201).json({ message: image })
}

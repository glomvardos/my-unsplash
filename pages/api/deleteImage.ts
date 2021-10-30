import type { NextApiRequest, NextApiResponse } from 'next'
const cloudinary = require('cloudinary').v2

type Data = {
  message: string
}

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: `Method ${req.method} is not allowed.` })
    return
  }

  const { label } = req.body

  cloudinary.uploader.destroy(`unsplash/${label}`, function (error: any, result: any) {
    if (result.result === 'ok') {
      res.status(200).json({ message: 'Image deleted' })
      return
    } else if (error) {
      res.status(500).json({ message: 'Something went wrong' })
      return
    }
  })
}

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

  res.status(200).json({ message: 'Success' })
}

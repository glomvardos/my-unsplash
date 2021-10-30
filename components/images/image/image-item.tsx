import Image from 'next/image'

export default function ImageItem({ url, label }: Props) {
  return (
    <Image
      src={url}
      alt={`An Image with label ${label}`}
      layout='responsive'
      width={300}
      height={250}
    />
  )
}

type Props = {
  url: string
  label: string
}

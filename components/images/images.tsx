import ImageItem from './image/image-item'

export default function Images({ images }: Props) {
  const displayImages = images.map(img => (
    <ImageItem key={img.id} url={img.url} label={img.label} />
  ))

  return <section>{displayImages}</section>
}

interface Properties {
  id: string
  label: string
  url: string
}

type Props = {
  images: Array<Properties>
}

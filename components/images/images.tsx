import ImageItem from './image/image-item'

export default function Images({ images }: Props) {
  const displayImages = images.map(img => (
    <ImageItem key={img.id} url={img.url} label={img.label} />
  ))

  return (
    <section className='mt-12 grid grid-cols-1 gap-10 auto-cols-max sm:grid-cols-2 lg:grid-cols-3 lg:mt-20'>
      {displayImages}
    </section>
  )
}

interface Properties {
  id: string
  label: string
  url: string
}

type Props = {
  images: Array<Properties>
}

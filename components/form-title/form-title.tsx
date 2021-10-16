export default function FormTitle({ text }: Props) {
  return <h2 className='font-medium text-2xl text-[#333333] mb-5'>{text}</h2>
}

type Props = {
  text: string
}

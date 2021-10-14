export default function Input({ label, type }: Props) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  )
}

type Props = {
  label: string
  type: string
}

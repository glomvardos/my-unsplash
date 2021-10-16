export default function Input({ label, type, placeholder }: Props) {
  return (
    <div className='mb-[1.1875rem] flex  flex-col'>
      <label className='text-[#4F4F4F] text-sm font-medium mb-[0.625rem]'>{label}</label>
      <input
        className='outline-none p-[1.125rem] border-[1px] rounded-xl border-[#4F4F4F]'
        type={type}
        placeholder={placeholder}
        required
      />
    </div>
  )
}

type Props = {
  label: string
  placeholder: string
  type: string
}

import React from 'react'

export default function Input({
  label,
  type,
  placeholder,
  value,
  isRequired,
  onChangeHandler,
  onBlurHandler,
  onFocusHandler,
}: Props) {
  return (
    <div className='mb-[1.1875rem] flex  flex-col'>
      <label className='text-[#4F4F4F] text-sm font-medium mb-[0.625rem]'>{label}</label>
      <input
        className={`outline-none p-[1.125rem] border-[1px] rounded-xl ${
          isRequired ? 'border-[#ff4136]' : 'border-[#4F4F4F]'
        }`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onFocus={onFocusHandler}
      />
      {isRequired && <p className='text-xs mt-1 text-[#ff4136]'>{label} is required</p>}
    </div>
  )
}

type Props = {
  label: string
  placeholder: string
  type: string
  value: string
  isRequired: boolean
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlurHandler: () => void
  onFocusHandler: () => void
}

import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface Props {
  className: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  type: HTMLInputTypeAttribute
  placeholder: string
  errorMessage?: string
  name: string
}

export default function Input({ className, errorMessage, placeholder, register, type, name }: Props) {
  return (
    <div className={className}>
      <input
        type={type}
        {...register(name)}
        className='w-full border border-gray-200 outline-none px-3 py-2 focus:border-gray-700 focus:shadow-sm'
        placeholder={placeholder}
      />
      <div className='text-red-500 h-[1rem] text-sm'>{errorMessage}</div>
    </div>
  )
}

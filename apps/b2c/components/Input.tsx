import classnames from 'classnames'
import { ClassAttributes, HTMLAttributes, HTMLProps } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    ClassAttributes<HTMLInputElement>,
    HTMLProps<HTMLInputElement> {
  register?: UseFormRegisterReturn
}

const Input = ({ type, className, register, ...otherFields }: InputProps) => {
  return (
    <input
      type={type || 'text'}
      className={classnames(
        'py-md px-sm block h-10 w-full border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-0',
        className
      )}
      {...otherFields}
      {...(register && register)}
    />
  )
}

export default Input

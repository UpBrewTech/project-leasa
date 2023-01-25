import classNames from 'classnames'
import { ClassAttributes, HTMLAttributes, HTMLProps } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    ClassAttributes<HTMLInputElement>,
    HTMLProps<HTMLInputElement> {
  register?: UseFormRegister<any>
}

const Input = ({ register, name, className, ...otherFields }: InputProps) => {
  return (
    <input
      {...(register && name && register(name))}
      className={classNames(
        'block w-full border border-gray-300 bg-gray-50 py-md px-sm text-gray-900 focus:outline-none focus:ring-0 h-10',
        className
      )}
      {...otherFields}
    />
  )
}

export default Input

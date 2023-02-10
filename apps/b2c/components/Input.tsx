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
        'py-md px-sm block h-10 w-full border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-0',
        className
      )}
      {...otherFields}
    />
  )
}

export default Input

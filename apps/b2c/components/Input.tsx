import classNames from 'classnames'
import { ClassAttributes, HTMLAttributes, HTMLProps } from 'react'

interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    ClassAttributes<HTMLInputElement>,
    HTMLProps<HTMLInputElement> {}

const Input = ({ type, className, ...otherFields }: InputProps) => {
  return (
    <input
      type={type || 'text'}
      className={classNames(
        'py-md px-sm block h-10 w-full border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-0',
        className
      )}
      {...otherFields}
    />
  )
}

export default Input

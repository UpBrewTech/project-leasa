import classNames from 'classnames'
import {
  ClassAttributes,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  HTMLProps,
} from 'react'

interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    ClassAttributes<HTMLInputElement>,
    HTMLProps<HTMLInputElement> {
  type?:
    | 'text'
    | 'email'
    | 'number'
    | 'password'
    | 'tel'
    | 'file'
    | 'date'
    | 'search'
}

const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = 'text', className, ...otherProps } = props
    return (
      <input
        ref={ref}
        type={type}
        className={classNames(
          'block w-full border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:outline-none focus:ring-0 h-10',
          className
        )}
        {...otherProps}
      />
    )
  }
)

Input.displayName = 'Input'
export default Input

import classnames from 'classnames'

export type ButtonVariant = 'primary' | 'secondary' | 'text'

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant
  danger?: boolean
  size?: 'small' | 'regular' | 'large'
  wide?: boolean
  loading?: boolean
}

export const Button = ({
  wide = false,
  variant = 'primary',
  size = 'regular',
  danger,
  children,
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classnames(
        'transition-all duration-200 ease-in-out',
        'hover:bg-opacity-75 hover:text-opacity-75 hover:border-opacity-75',
        'cursor-pointer rounded-standard border leading-none inline-block',
        {
          'px-sm py-xs text-sm': size === 'small',
          'px-md py-st text-base': size === 'regular',
          'px-lg py-sm text-lg': size === 'large',
          'w-full': wide,
        },
        danger
          ? {
              'text-white bg-red-600 border-red-600': variant === 'primary',
              'text-red-600 bg-transparent border-red-600':
                variant === 'secondary',
              'text-red-600 bg-transparent border-transparent':
                variant === 'text',
            }
          : {
              'text-white bg-primary-600 border-primary-600':
                variant === 'primary',
              'text-primary-600 bg-transparent border-primary-600':
                variant === 'secondary',
              'text-primary-600 bg-transparent border-transparent':
                variant === 'text',
            },
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

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
        'rounded-standard inline-block cursor-pointer border leading-none',
        {
          'px-sm py-xs text-sm': size === 'small',
          'px-md py-st text-base': size === 'regular',
          'px-lg py-sm text-lg': size === 'large',
          'w-full': wide,
        },
        danger
          ? {
              'border-red-600 bg-red-600 text-white hover:border-red-600/75 hover:bg-red-600/75 hover:text-white/75':
                variant === 'primary',
              'border-red-600 bg-transparent text-red-600 hover:border-red-600/75 hover:text-red-600/75':
                variant === 'secondary',
              'border-transparent bg-transparent text-red-600 hover:text-red-600/75':
                variant === 'text',
            }
          : {
              'border-purple-600 bg-purple-600 text-white hover:border-purple-600/75 hover:bg-purple-600/75 hover:text-white/75':
                variant === 'primary',
              'border-purple-600 bg-transparent text-purple-600 hover:border-purple-600/75 hover:text-purple-600/75':
                variant === 'secondary',
              'border-transparent bg-transparent text-purple-600 hover:text-purple-600/75':
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

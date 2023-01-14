import classnames from 'classnames'

type Variant = 'primary' | 'secondary' | 'text'

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: Variant
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
        'hover:bg-opacity-70 hover:text-opacity-70 hover:border-opacity-70',
        'cursor-pointer rounded-full border leading-none inline-block',
        {
          'px-2 py-1 text-sm': size === 'small',
          'px-4 py-2 text-base': size === 'regular',
          'px-8 py-4 text-lg': size === 'large',
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

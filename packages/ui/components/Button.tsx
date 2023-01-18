import classnames from 'classnames'
import { LoadingDots } from './LoadingDots'

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
  loading,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classnames(
        'relative',
        'transition-all duration-200 ease-in-out',
        'rounded-standard inline-block cursor-pointer border leading-none',
        {
          'px-sm py-xs min-h-[32] text-sm': size === 'small',
          'px-md py-st min-h-[42] text-base': size === 'regular',
          'px-lg py-sm min-h-[52] text-lg': size === 'large',
          'w-full': wide,
        },

        danger && loading
          ? {
              'border-red-100 bg-red-100': variant === 'primary',
              'border-red-100 bg-transparent': variant === 'secondary',
              'border-transparent bg-transparent': variant === 'text',
            }
          : danger
          ? {
              'border-red-600 bg-red-600 text-white hover:border-red-600/75 hover:bg-red-600/75 hover:text-white/75':
                variant === 'primary',
              'border-red-600 bg-transparent text-red-600 hover:border-red-600/75 hover:text-red-600/75':
                variant === 'secondary',
              'border-transparent bg-transparent text-red-600 hover:text-red-600/75':
                variant === 'text',
            }
          : loading
          ? {
              'border-purple-100 bg-purple-100': variant === 'primary',
              'border-purple-100 bg-transparent': variant === 'secondary',
              'border-transparent bg-transparent': variant === 'text',
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
      {loading && (
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <LoadingDots danger={danger} />
        </div>
      )}
      <span className={classnames({ invisible: loading })}>{children}</span>
    </button>
  )
}

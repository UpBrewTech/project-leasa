import classnames from 'classnames'
import { PropsWithChildren } from 'react'

export interface StickyHeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    PropsWithChildren {
  variant?: 'primary' | 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
}

export const StickyHeader = ({
  children,
  variant = 'primary',
  size = 'md',
  shadow,
  className,
  ...otherProps
}: StickyHeaderProps) => {
  return (
    <header
      className={classnames(
        'fixed top-0 left-0 flex w-full items-center px-4',
        {
          'bg-purple-600 text-white': variant === 'primary',
          'bg-slate-50': variant === 'light',
          'bg-slate-800 text-white': variant === 'dark',
        },
        {
          'h-12 text-base': size === 'sm',
          'h-14 text-lg': size === 'md',
          'h-16 text-xl': size === 'lg',
        },
        {
          shadow: shadow === 'sm',
          'shadow-md': shadow === 'md',
          'shadow-lg': shadow === 'lg',
        },
        className
      )}
      {...otherProps}
    >
      {children}
    </header>
  )
}

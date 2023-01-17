import classnames from 'classnames'
import { PropsWithChildren } from 'react'

export interface StickyHeaderProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >,
    PropsWithChildren {}

export const StickyHeader = ({
  children,
  className,
  ...otherProps
}: StickyHeaderProps) => {
  return (
    <header
      className={classnames(
        'w-full fixed top-0 flex h-16 items-center',
        className
      )}
      {...otherProps}
    >
      {children}
    </header>
  )
}

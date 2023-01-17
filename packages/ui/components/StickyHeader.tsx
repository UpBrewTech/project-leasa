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
        'fixed top-0 left-0 flex h-16 w-full items-center p-4',
        className
      )}
      {...otherProps}
    >
      {children}
    </header>
  )
}

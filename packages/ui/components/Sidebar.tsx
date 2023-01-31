import classnames from 'classnames'
import { PropsWithChildren } from 'react'

export type SidebarVariant = 'primary' | 'secondary'

export interface SidebarProps extends PropsWithChildren {
  variant?: SidebarVariant
}

export const Sidebar = ({ variant = 'primary', children }: SidebarProps) => {
  return (
    <aside
      className={classnames('h-full w-64 shadow-sm', {
        'bg-gray-100': variant === 'primary',
        'bg-white': variant === 'secondary',
      })}
    >
      <div className="grid grid-flow-row gap-y-4 p-4">{children}</div>
    </aside>
  )
}

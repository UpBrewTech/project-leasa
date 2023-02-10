import classnames from 'classnames'
import { PropsWithChildren, ReactElement } from 'react'

export type SidebarVariant = 'primary' | 'secondary'
export interface SidebarProps extends PropsWithChildren {
  alternative?: boolean
}

export const Sidebar = ({ alternative, children }: SidebarProps) => {
  return (
    <aside
      className={classnames(
        'h-full w-64 shadow-sm',
        alternative ? 'bg-white' : 'bg-gray-50'
      )}
    >
      <div className="grid grid-flow-row gap-y-2">{children}</div>
    </aside>
  )
}

export interface SidebarLinkProps {
  icon?: ReactElement
  href: string
  text: string
  isActive?: boolean
}

export const SidebarLink = ({
  icon,
  text,
  href,
  isActive,
}: SidebarLinkProps) => {
  return (
    <a
      href={href}
      className={classnames(
        'p-sm flex w-full items-center gap-4 hover:bg-gray-100',
        isActive && 'bg-gray-100'
      )}
    >
      {icon && <span className="w-8">{icon}</span>}
      <span>{text}</span>
    </a>
  )
}

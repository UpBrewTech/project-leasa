import classnames from 'classnames'
import Link from 'next/link'

export interface MenuItem {
  text: string
  url: string
}

export interface MenuProps {
  items: MenuItem[]
  itemClasses?: string
  containerClasses?: string
}

export const Menu = ({
  items,
  itemClasses = 'p-4 bg-slate-50 hover:bg-slate-100',
  containerClasses = 'gap-2 items-center justify-end',
}: MenuProps) => {
  return (
    <div className={classnames('flex', containerClasses)}>
      {items.map((item, key) => {
        return (
          <Link key={`menu-${key}`} href={item.url} className={itemClasses}>
            {item.text}
          </Link>
        )
      })}
    </div>
  )
}

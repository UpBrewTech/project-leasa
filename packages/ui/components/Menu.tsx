import classnames from 'classnames'

export interface MenuItem {
  text: string
  url: string
}

export type MenuVariant = 'primary' | 'secondary' | 'text'

export interface MenuProps {
  items: MenuItem[]
  variant?: MenuVariant
  size?: 'small' | 'regular' | 'large'
  flexJustify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  flexGap?: number
  containerClasses?: string
}

export const Menu = ({
  items,
  variant = 'primary',
  size = 'regular',
  flexJustify = 'start',
  flexGap,
  containerClasses,
}: MenuProps) => {
  const flexGapClass = flexGap && `gap-${flexGap}`

  return (
    <div
      className={classnames(
        'flex h-full w-full items-center',
        flexGapClass,
        {
          'justify-start': flexJustify === 'start',
          'justify-end': flexJustify === 'end',
          'justify-center': flexJustify === 'center',
          'justify-between': flexJustify === 'between',
          'justify-around': flexJustify === 'around',
          'justify-evenly': flexJustify === 'evenly',
        },
        containerClasses
      )}
    >
      {items.map((item, key) => {
        return (
          <a
            key={key}
            href={item.url}
            className={classnames(
              'border transition-all duration-200 ease-in-out',
              {
                'border-purple-600 bg-purple-600 text-white hover:border-purple-600/75 hover:bg-purple-600/75 hover:text-white/75':
                  variant === 'primary',
                'border-purple-600 bg-transparent text-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-white':
                  variant === 'secondary',
                'border-transparent bg-transparent text-purple-600 hover:text-purple-600/75':
                  variant === 'text',
              },
              {
                'px-sm py-xs text-sm': size === 'small',
                'px-md py-st text-base': size === 'regular',
                'px-lg py-sm text-lg': size === 'large',
              }
            )}
          >
            {item.text}
          </a>
        )
      })}
    </div>
  )
}

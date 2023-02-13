import classnames from 'classnames'

export type TypographyVariant =
  | 'title-page'
  | 'title-section'
  | 'title-subsection'
  | 'paragraph-large'
  | 'paragraph-medium'
  | 'paragraph-small'
  | 'label-large'
  | 'label-medium'
  | 'label-small'

export interface TypographyProps<T extends React.ElementType>
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  as?: T
  variant: TypographyVariant
}

export const Typography = <T extends React.ElementType = 'span'>({
  as: As,
  className,
  variant,
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof TypographyProps<T>>) => {
  const Component = As || 'span'
  return (
    <Component
      className={classnames('font-inter', className, {
        'text-5xl font-medium leading-tight': variant === 'title-page',
        'text-3xl font-medium leading-10': variant === 'title-section',
        'text-2xl font-bold leading-10': variant === 'title-subsection',
        'text-2xl font-normal leading-8': variant === 'paragraph-large',
        'text-base font-normal leading-6': variant === 'paragraph-medium',
        'text-xs font-normal leading-5': variant === 'paragraph-small',
        'text-2xl font-medium leading-8': variant === 'label-large',
        'text-xl font-medium leading-6': variant === 'label-medium',
        'text-xs font-medium leading-5': variant === 'label-small',
      })}
      {...props}
    />
  )
}

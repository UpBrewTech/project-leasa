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
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLHRElement
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
      className={classnames(className, {
        'text-5xl font-medium leading-tight my-md': variant === 'title-page',
        'text-xl font-medium leading-7 my-md': variant === 'title-section',
        'text-base font-bold leading-6 my-md': variant === 'title-subsection',
        'text-base font-normal leading-6 my-sm': variant === 'paragraph-large',
        'text-sm font-normal leading-6 my-st': variant === 'paragraph-medium',
        'text-xs font-normal leading-5 my-st': variant === 'paragraph-small',
        'text-base font-medium leading-6 my-st': variant === 'label-large',
        'text-sm font-medium leading-5 my-sm': variant === 'label-medium',
        'text-xs font-medium leading-4 my-xs': variant === 'label-small',
      })}
      {...props}
    />
  )
}

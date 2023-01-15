import classnames from 'classnames'

export interface DividerProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLHRElement
  > {}

export const Divider = ({ className }: DividerProps) => {
  return (
    <hr
      className={classnames(
        'border-t border-neutral-100 bg-white my-sm',
        className
      )}
    />
  )
}

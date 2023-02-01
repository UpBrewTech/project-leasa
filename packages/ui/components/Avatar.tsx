import classnames from 'classnames'
import { IconPerson } from '../Icons'

export interface AvatarProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  alternative?: boolean
}

export const Avatar = ({ alternative, src, ...otherProps }: AvatarProps) => {
  return (
    <div
      className={classnames(
        'h-full w-full overflow-hidden bg-slate-200',
        alternative ? 'rounded' : 'rounded-full'
      )}
    >
      {src ? (
        <img src={src} className="h-full w-full" {...otherProps} />
      ) : (
        <IconPerson
          className="h-full w-full text-slate-400"
          viewBox="8 0 4 15"
        />
      )}
    </div>
  )
}

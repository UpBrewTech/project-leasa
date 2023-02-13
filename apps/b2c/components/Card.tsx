import { Typography } from 'ui/components/Typography'
import { ImageFilter } from './ImageFilter'

interface Props {
  image: string
  title: string
  subtitle: string
  hiddenText?: string
}

export const Card: React.FC<Props> = ({
  image,
  subtitle,
  title,
  hiddenText,
}) => {
  return (
    <div className="group relative h-full w-full overflow-hidden rounded-md text-white">
      <div className="rounded-regular relative h-full w-full overflow-hidden">
        <div className="relative block h-full w-full ">
          <img
            alt={title}
            loading="lazy"
            src={image}
            className="h-full w-full object-cover duration-500 group-hover:scale-110"
          />
          <ImageFilter />
        </div>
      </div>
      <div className="absolute bottom-0 flex h-full w-full items-end">
        <div className="w-[85%] p-4 sm:p-5">
          <Typography className="mb-xxs" variant="label-medium" as="header">
            {title}
          </Typography>
          <Typography variant="paragraph-medium" as="div">
            {subtitle}
          </Typography>
          {hiddenText && (
            <Typography
              variant="paragraph-medium"
              as="div"
              className="h-0 overflow-hidden duration-300 group-hover:h-12"
            >
              <hr className="my-2" />
              {hiddenText}
            </Typography>
          )}
        </div>
      </div>
    </div>
  )
}

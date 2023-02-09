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
    <div className="group text-white h-full w-full rounded-md relative overflow-hidden">
      <div className="relative w-full h-full overflow-hidden rounded-regular">
        <div className="block relative w-full h-full ">
          <img
            alt={title}
            loading="lazy"
            src={image}
            className="object-cover w-full h-full duration-500 group-hover:scale-110"
          />
          <ImageFilter />
        </div>
      </div>
      <div className="h-full flex items-end absolute bottom-0 w-full">
        <div className="p-4 sm:p-5 w-[85%]">
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
              className="overflow-hidden h-0 duration-300 group-hover:h-12"
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

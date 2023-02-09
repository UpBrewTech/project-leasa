import { ImageFilter } from 'components/ImageFilter'
import { Button } from 'ui/components/Button'
import { Typography } from 'ui/components/Typography'

export const Hero = () => {
  return (
    <div
      style={{
        // TODO - replace with actual photo
        backgroundImage: `url("https://cove.sg/images/hero-sections-backgrounds/homepage-hero.jpg")`,
      }}
      className="mx-auto flex h-[80vh] w-full flex-col items-center justify-center bg-cover bg-no-repeat text-center relative"
    >
      <ImageFilter />
      <div className="h-full flex justify-center items-center w-full px-sm md:px-lg relative">
        <div className="px-sm md:px-lg py-st rounded-standard w-full max-w-5xl bg-neutral-600/75 ">
          <Typography className="mb-xs text-white" as="h1" variant="title-page">
            Leasa
          </Typography>
          <Typography
            className="mb-md text-white"
            as="p"
            variant="title-subsection"
          >
            Let Leasa find your perfect lease
          </Typography>
          {/* TODO - replace with actual search handler */}
          <form
            action="search/"
            className="p-xs mb-st rounded-standard flex w-full bg-white overflow-hidden"
          >
            <input
              type="text"
              name="q"
              className="p-xs mr-sm grow outline-none"
              placeholder="Search..."
            />
            <Button
              type="submit"
              className="shrink-0 hidden sm:block"
              variant="primary"
              size="regular"
            >
              Search
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

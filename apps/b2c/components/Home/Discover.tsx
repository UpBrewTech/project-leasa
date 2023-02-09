import { Button } from 'ui/components/Button'
import { Typography } from 'ui/components/Typography'

export const Discover = () => {
  return (
    <section className="text-center max-w-lg mx-auto my-xl">
      <Typography
        as="h2"
        className="text-purple-600 mb-md italic"
        variant="title-section"
      >
        Discover
      </Typography>
      <Typography
        as="h3"
        className="text-gray-600 italic mb-md"
        variant="paragraph-large"
      >
        {`We've handpicked Iloilo's very best rental homes. Start picking your dream home now!`}
      </Typography>
      <Button size="large" variant="secondary">
        See more homes
      </Button>
    </section>
  )
}

import { Button } from 'ui/components/Button'
import { Typography } from 'ui/components/Typography'

export const Discover = () => {
  return (
    <section className="my-xl mx-auto max-w-lg text-center">
      <Typography
        as="h2"
        className="mb-md italic text-purple-600"
        variant="title-section"
      >
        Discover
      </Typography>
      <Typography
        as="h3"
        className="mb-md italic text-gray-600"
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

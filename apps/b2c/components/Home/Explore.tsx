import { Card } from 'components/Card'
import { Typography } from 'ui/components/Typography'

const mockData = [
  {
    title: 'RJV Homes',
    subtitle: 'Manduriao',
    hiddenText: 'This is a very nice place',
    image: 'https://cove.sg/images/the-waterina-living-room.jpg',
  },
  {
    title: 'Sa-Kun',
    subtitle: 'Maduriao',
    hiddenText: 'Sakun deezz nuutsss',
    image: 'https://cove.sg/images/29a-lorong-28-geylang-pink-room.jpg',
  },
  {
    title: 'Wendys',
    subtitle: 'Jaro',
    hiddenText: 'When deez nuts hit you',
    image:
      'https://cove.sg/images/buildings/landed-house-at-132-lorong-sarina-kembangan-front-facade-1.JPG',
  },
  {
    title: 'Smexy Only',
    subtitle: 'Jaro',
    hiddenText: 'If u no smexy, u no live here',
    image:
      'https://cove.sg/images/buildings/landed-house-ceylon-road-joo-chiat-katong.jpg',
  },
  {
    title: 'Jubal Properties',
    subtitle: 'Villa',
    hiddenText: 'For nong jubs only',
    image:
      'https://cove.sg/images/buildings/studio-for-rent-261-outram-road-tiong-bahru-201-desk-kitchen.jpg',
  },
]

// Just sample grid styling
const getGridClasses = (index: Number) => {
  switch (index) {
    case 0:
      return 'col-span-2 h-60 sm:col-span-1 md:col-span-4 md:h-[50vw] md:max-h-[580px]'
    case 1:
      return 'col-span-2 h-60 sm:col-span-1 md:col-span-4 md:h-[50vw] md:max-h-[580px]'
    case 2:
      return 'col-span-2 h-80 md:col-span-4 md:h-[50vw] md:max-h-[580px]'
    case 3:
      return 'col-span-2 h-60 md:col-span-6 md:h-[20vw] md:max-h-[240px]'
    case 4:
      return 'col-span-2 h-80 md:col-span-6 md:h-[20vw] md:max-h-[240px]'
    default:
      return 'col-span-1'
  }
}

export const Explore = () => {
  return (
    <section className="my-xl">
      <Typography className="mb-md" variant="title-section" as="h4">
        Explore
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-12 gap-lg grid-temp md:max-w-[">
        {mockData.map((data, index) => (
          <div className={getGridClasses(index)}>
            <Card
              image={data.image}
              subtitle={data.subtitle}
              title={data.title}
              hiddenText={data.hiddenText}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

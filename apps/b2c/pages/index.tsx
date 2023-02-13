import { Discover } from 'components/Home/Discover'
import { Explore } from 'components/Home/Explore'
import { Hero } from 'components/Home/Hero'
import { Avatar } from 'ui/components/Avatar'
import { StickyHeader } from 'ui/components/StickyHeader'

export default function Home() {
  return (
    <main>
      <StickyHeader profile={<Avatar rounded size="sm" />} />
      <Hero />
      <div className="px-sm md:px-lg mx-auto max-w-5xl">
        <Discover />
        <Explore />
      </div>
    </main>
  )
}

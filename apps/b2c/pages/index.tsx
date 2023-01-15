import { signOut, useSession } from 'next-auth/react'
import { Button } from 'ui/components/Button'
import { Typography } from 'ui/components/Typography'

export default function B2B() {
  const session = useSession()
  return (
    <div>
      <div
        style={{
          // TODO - replace with actual photo
          backgroundImage: `url("https://as2.ftcdn.net/v2/jpg/03/18/73/27/1000_F_318732794_h8kaFAiGkKsMlCquuFJlg5bKqGEXtJSR.jpg")`,
        }}
        className="mx-auto w-full text-center h-[50vh] justify-center items-center flex flex-col bg-no-repeat bg-cover"
      >
        <div className="max-w-2xl w-full bg-neutral-600 p-lg bg-opacity-75 rounded-standard">
          <Typography className="text-white mb-sm" as="h1" variant="title-page">
            Leasa
          </Typography>
          <Typography
            className="text-white mb-st"
            as="p"
            variant="title-subsection"
          >
            Let Leasa find your perfect lease
          </Typography>
          <div className="w-full p-sm mb-st flex bg-white rounded-standard">
            <input
              type="text"
              className="flex-grow p-xs mr-sm"
              placeholder="Search..."
            />
            <Button className="flex-shrink-0" variant="primary" size="large">
              Search
            </Button>
          </div>
        </div>
      </div>
      {session.status === 'authenticated' && (
        <button
          onClick={() => {
            signOut()
          }}
        >
          sign out
        </button>
      )}
    </div>
  )
}

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
        className="mx-auto flex h-[50vh] w-full flex-col items-center justify-center bg-cover bg-no-repeat text-center"
      >
        <div className="p-lg rounded-standard w-full max-w-2xl bg-neutral-600/75">
          <Typography className="mb-sm text-white" as="h1" variant="title-page">
            Leasa
          </Typography>
          <Typography
            className="mb-st text-white"
            as="p"
            variant="title-subsection"
          >
            Let Leasa find your perfect lease
          </Typography>
          <div className="p-sm mb-st rounded-standard flex w-full bg-white">
            <input
              type="text"
              className="p-xs mr-sm grow"
              placeholder="Search..."
            />
            <Button className="shrink-0" variant="primary" size="large">
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

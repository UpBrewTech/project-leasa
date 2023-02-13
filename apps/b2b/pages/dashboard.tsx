import { signOut } from 'next-auth/react'
import { Button } from 'ui/components/Button'
import { Typography } from 'ui/components/Typography'
import { PanelLayout } from 'ui/Layouts/Panel'

const Dashboard: AppPage = () => {
  return (
    <div className="p-md w-full bg-white text-center shadow-sm sm:w-96">
      <Typography as="h1" variant="title-page" className="mb-xs">
        Dashboard
      </Typography>
      <Button
        onClick={() => {
          signOut({ callbackUrl: '/auth/login' })
        }}
      >
        Sign out
      </Button>
    </div>
  )
}

Dashboard.allowedRoles = ['USER']
Dashboard.getLayout = PanelLayout

export default Dashboard

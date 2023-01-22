import { signOut } from 'next-auth/react'
import { Button, PanelLayout, Typography } from 'ui'
import { AppPage } from './_app'

const Dashboard: AppPage = () => {
  return (
    <div className="w-full bg-white p-8 text-center shadow-sm sm:w-96">
      <div className="mb-6">
        <Typography as="h1" variant="title-page">
          Dashboard
        </Typography>
      </div>
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

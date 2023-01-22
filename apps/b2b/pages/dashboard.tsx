import { PanelLayout, Typography } from 'ui'
import { AppPage } from './_app'

const Dashboard: AppPage = () => {
  return (
    <Typography as="h1" variant="title-page">
      Dashboard
    </Typography>
  )
}

Dashboard.allowedRoles = ['USER']
Dashboard.getLayout = PanelLayout

export default Dashboard

import { AppPage } from 'pages/_app'
import { PanelLayout, Typography } from 'ui'

const Login: AppPage = () => {
  return (
    <Typography as="h1" variant="title-page">
      Login
    </Typography>
  )
}

Login.allowedRoles = ['PUBLIC']
Login.getLayout = PanelLayout

export default Login

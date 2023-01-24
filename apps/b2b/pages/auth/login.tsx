import LoginForm from 'components/Auth/LoginForm'
import { AppPage } from 'pages/_app'
import { Typography } from 'ui/components/Typography'
import { PanelLayout } from 'ui/Layouts/Panel'

const Login: AppPage = () => {
  return (
    <div className="p-md w-full bg-white shadow-sm sm:w-96">
      <Typography as="h1" variant="title-page" className="mb-xs text-center">
        Login
      </Typography>

      <LoginForm />
    </div>
  )
}

Login.allowedRoles = ['PUBLIC']
Login.getLayout = PanelLayout

export default Login

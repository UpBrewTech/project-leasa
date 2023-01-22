import LoginForm from 'components/Auth/LoginForm'
import { AppPage } from 'pages/_app'
import { PanelLayout, Typography } from 'ui'

const Login: AppPage = () => {
  return (
    <div className="w-full bg-white p-8 shadow-sm sm:w-96">
      <div className="mb-6 text-center">
        <Typography as="h1" variant="title-page">
          Login
        </Typography>
      </div>

      <LoginForm />
    </div>
  )
}

Login.allowedRoles = ['PUBLIC']
Login.getLayout = PanelLayout

export default Login

import RegistrationForm from 'components/Auth/RegistrationForm'
import { AppPage } from 'pages/_app'
import { PanelLayout, Typography } from 'ui'

const Register: AppPage = () => {
  return (
    <div className="w-full bg-white p-8 shadow-sm sm:w-96">
      <Typography as="h1" variant="title-page">
        Register
      </Typography>

      <RegistrationForm />
    </div>
  )
}

Register.allowedRoles = ['PUBLIC']
Register.getLayout = PanelLayout

export default Register

import RegistrationForm from 'components/Auth/RegistrationForm'
import { AppPage } from 'pages/_app'
import { PanelLayout, Typography } from 'ui'

const Register: AppPage = () => {
  return (
    <div className="w-full bg-white p-8 shadow-sm sm:w-96">
      <div className="mb-6 text-center">
        <Typography as="h1" variant="title-page">
          Register
        </Typography>
      </div>

      <RegistrationForm />
    </div>
  )
}

Register.allowedRoles = ['PUBLIC']
Register.getLayout = PanelLayout

export default Register

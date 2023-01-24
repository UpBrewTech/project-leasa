import RegistrationForm from 'components/Auth/RegistrationForm'
import { AppPage } from 'pages/_app'
import { Typography } from 'ui/components/Typography'
import { PanelLayout } from 'ui/Layouts/Panel'

const Register: AppPage = () => {
  return (
    <div className="p-md w-full bg-white shadow-sm sm:w-96">
      <Typography as="h1" variant="title-page" className="mb-xs text-center">
        Register
      </Typography>

      <RegistrationForm />
    </div>
  )
}

Register.allowedRoles = ['PUBLIC']
Register.getLayout = PanelLayout

export default Register

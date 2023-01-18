import Button from 'components/Button'
import { signIn } from 'next-auth/react'
import { PanelLayout } from 'ui/Layouts/Panel'
import useToggle from 'utils/useToggle'

const Login = () => {
  const { state: loading, toggle: toggleLoading } = useToggle()

  return (
    <div className="w-full bg-white p-8 shadow-sm sm:w-96">
      <div className="mb-4 text-center">
        <h2 className="text-2xl">Login</h2>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          className="w-full"
          disabled={loading}
          onClick={() => {
            toggleLoading()
            signIn('google', { redirect: false })
          }}
        >
          Login with Google
        </Button>
      </div>
    </div>
  )
}

Login.getLayout = PanelLayout
Login.allowedRoles = ['public']

export default Login

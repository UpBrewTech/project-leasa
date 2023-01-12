import Button from 'components/Button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { IconClose } from 'ui/Icons'
import { PanelLayout } from 'ui/Layouts/Panel'
import useToggle from 'utils/useToggle'

const Login = () => {
  const { state: loading, toggle: toggleLoading } = useToggle()

  return (
    <div className="w-full bg-white p-8 shadow-sm sm:w-96">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl">Login</h2>
        <Link href="/">
          <IconClose className="h-5 w-5" />
        </Link>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          className="w-full hidden"
          disabled={loading}
          onClick={() => {
            toggleLoading()
            signIn('facebook', { redirect: false })
          }}
        >
          Login with Facebook
        </Button>
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

import Button from 'components/Button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconClose } from 'ui/Icons'
import { PanelLayout } from 'ui/Layouts/Panel'

const Login = () => {
  const { push, query } = useRouter()

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
          loading={!!query.with && query.with === 'facebook'}
          disabled={!!query.with && query.with !== 'facebook'}
          onClick={() => {
            signIn('facebook', { callbackUrl: '/auth/login' })
            push({ query: { with: 'facebook' } })
          }}
        >
          Login with Facebook
        </Button>
        <Button
          type="submit"
          className="w-full"
          loading={!!query.with && query.with === 'google'}
          disabled={!!query.with && query.with !== 'google'}
          onClick={() => {
            signIn('google', { callbackUrl: '/auth/login' })
            push({ query: { with: 'google' } })
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

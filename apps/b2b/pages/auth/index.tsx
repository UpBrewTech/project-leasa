import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export const REDIRECT_MAP: Record<Role, string> = {
  USER: '/dashboard',
  PUBLIC: '/',
}

const Auth = () => {
  const { push } = useRouter()
  const { status, data } = useSession()

  if (status === 'loading') return null

  if (status === 'authenticated') {
    push({ pathname: REDIRECT_MAP[data.user.role] })
  }

  if (status === 'unauthenticated') {
    push('/')
  }

  return null
}

export default Auth

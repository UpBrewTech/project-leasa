import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { REDIRECT_MAP } from 'pages/auth'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  allowedRoles?: Role[]
}>

const PageAuth = ({ allowedRoles, children }: Props) => {
  const { push, asPath } = useRouter()
  const { data, status } = useSession()
  const role = data?.user.role ? data?.user.role : 'public'

  if (status === 'loading') return null

  if (allowedRoles && !allowedRoles.includes(role)) {
    push({
      pathname: REDIRECT_MAP[role],
      ...(status === 'unauthenticated' && { query: { from: asPath } }),
    })

    return null
  }

  return <>{children}</>
}

export default PageAuth

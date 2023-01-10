import { signOut, useSession } from 'next-auth/react'
import { B2BComponent } from '../components/B2BComponent'

export default function B2B() {
  const session = useSession()
  return (
    <div>
      <h1>test</h1>
      testing component11
      {/* {formatCurrency} */}
      <B2BComponent />
      {session.status === 'authenticated' && (
        <button
          onClick={() => {
            signOut()
          }}
        >
          sign out
        </button>
      )}
    </div>
  )
}

import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth/jwt' {
  interface JWT {
    sub: string
    exp: number
    'https://hasura.io/jwt/claims': HasuraClaim
  }
}

declare module 'next-auth' {
  interface User {
    role: Role
  }

  interface Session {
    user: User
    token: string
  }
}

import "next-auth"
import "next-auth/jwt"

declare module "next-auth/jwt" {
  interface JWT {
    sub: string
    name: string
    email: string
    exp: number
    "https://hasura.io/jwt/claims": HasuraClaim
  }
}

declare module "next-auth" {
  interface User {
    id: string
    name: string
    email: string
    image?: string
    role: Role
  }
}

declare module "next-auth" {
  interface Session {
    user: User
    expires: ISODateString
    token: string
  }
}

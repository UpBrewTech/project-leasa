import HasuraAdapter from 'components/HasuraAdapter'
import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { Awaitable, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { doSSRFetch } from 'utils/doSSRFetch'

const MAX_AGE = 24 * 60 * 60 // hr * min * sec

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`

  return await NextAuth(req, res, {
    adapter: HasuraAdapter(),
    providers: [
      EmailProvider({
        server: process.env.EMAIL_SERVER!,
        from: process.env.EMAIL_FROM!,
        // sendVerificationRequest: (params) => {
        //   console.log("sendVerificationRequest", params)
        // },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID!,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: {
            label: 'Username',
            type: 'text',
            placeholder: 'Username',
          },
          password: {
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
          },
        },
        authorize: async (credentials) => {
          const { username, password } = credentials || {}

          const data = await doSSRFetch({
            query: GET_USER_WITH_CREDENTIALS,
            variables: {
              username,
              password,
            },
          })

          if (!data.authenticate.id) return null

          const { id, name, role, email, image } = data.authenticate
          return { id, name, role, email, image }
        },
      }),
    ],
    jwt: {
      maxAge: MAX_AGE,
      encode: async ({ token, secret, maxAge }) => {
        token = {
          ...token,
          exp: getExp({ exp: token?.exp, maxAge }),
        } as JWT

        const encodedToken = jwt.sign(token, secret, { algorithm: 'HS256' })
        return Promise.resolve(encodedToken)
      },
      decode: async ({ token, secret }) => {
        if (!token) return null as Awaitable<null>

        const decodedToken = jwt.verify(token, secret, {
          algorithms: ['HS256'],
        })
        return decodedToken as Awaitable<JWT>
      },
    },
    callbacks: {
      // signIn: async ({ user, account, profile, email, credentials }) => {
      //   console.log("signIn callback")

      //   return true
      // },
      jwt: async ({ token, user }) => {
        // console.log("jwt callback")

        if (user) {
          const role = user.role ? user.role : 'user'

          token = {
            ...token,
            'https://hasura.io/jwt/claims': {
              'x-hasura-allowed-roles': [role],
              'x-hasura-default-role': role,
              'x-hasura-role': role,
              ...(role === 'user'
                ? { 'x-hasura-user-id': token.sub }
                : { 'x-hasura-account-id': token.sub }),
            },
          }
        }

        return Promise.resolve(token)
      },
      session: async ({ session, token }) => {
        // console.log("session callback")

        const encodedToken = jwt.sign(token, process.env.NEXTAUTH_SECRET!, {
          algorithm: 'HS256',
        })

        session.user = {
          id: token.sub,
          name: token.name,
          email: token.email,
          role: token['https://hasura.io/jwt/claims']['x-hasura-role'],
          image: token.picture,
        } as User
        session.token = encodedToken

        return Promise.resolve(session)
      },
    },
    session: {
      strategy: 'jwt',
      maxAge: MAX_AGE,
    },
    pages: {
      signIn: '/',
      signOut: '/',
      error: '404',
      // verifyRequest: "/auth/verify-request",
    },
  })
}

interface GetExpProps {
  exp?: number
  maxAge?: number
}

const getExp = ({ exp, maxAge = MAX_AGE }: GetExpProps) => {
  const now = Math.floor(Date.now() / 1000)
  if (!exp) return now + maxAge

  return exp && exp > now ? now + maxAge : exp
}

const GET_USER_WITH_CREDENTIALS = `
  query Authentication($username: String!, $password: String!) {
    authenticate(args: { username: $username, password: $password }) {
      id
      name
      email
      image
      role
    }
  }
`

const GET_ACCOUNT = `
  query GetAccount($id: uuid = "") {
    account: accounts_by_pk(id: $id) {
      account_name
      account_email
      account_phone
      id
    }
  }
`

import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { Awaitable, Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'
import { asyncSSRFetch } from 'utils/asyncSSRFetch'
import HasuraAdapter from 'utils/HasuraAdapter'

const MAX_AGE = 24 * 60 * 60 // hr * min * sec

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`

  return await NextAuth(req, res, {
    adapter: HasuraAdapter(),
    providers: [
      EmailProvider({
        server: process.env.EMAIL_SERVER!,
        from: process.env.EMAIL_FROM!,
      }),
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          identifier: {
            label: 'Identifier',
            type: 'text',
            placeholder: 'Identifier',
          },
          password: {
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
          },
        },
        authorize: async (credentials) => {
          const { identifier, password } = credentials || {}

          const data = await asyncSSRFetch<{ authenticate: User }>({
            query: GET_USER_WITH_CREDENTIALS,
            variables: {
              identifier,
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
      encode: async ({ token, secret }) => {
        const jwtToken = {
          ...token,
          exp: Math.floor(Date.now() / 1000) + MAX_AGE,
        }

        const encodedToken = jwt.sign(jwtToken, secret, { algorithm: 'HS256' })
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
      jwt: async ({ token, user }) => {
        // on subsequent calls
        if (!user) return Promise.resolve(token)

        // on successful signIn
        const role = user.role ? user.role : 'user'
        const userToken = {
          ...token,
          'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': [role],
            'x-hasura-default-role': role,
            'x-hasura-role': role,
            'x-hasura-user-id': token.sub,
          },
        }

        return Promise.resolve(userToken)
      },
      session: async ({ session, token }) => {
        const encodedToken = jwt.sign(token, process.env.NEXTAUTH_SECRET!, {
          algorithm: 'HS256',
        })

        const sessionResponse: Session = {
          ...session,
          user: {
            id: token.sub,
            name: token.name,
            email: token.email,
            role: token['https://hasura.io/jwt/claims']['x-hasura-role'],
            image: token.picture,
          },
          token: encodedToken,
        }

        return Promise.resolve(sessionResponse)
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
    },
  })
}

const GET_USER_WITH_CREDENTIALS = `
  query Authentication($identifier: String!, $password: String!) {
    authenticate(args: { identifier: $identifier, password: $password }) {
      id
      name
      email
      image
      role
    }
  }
`

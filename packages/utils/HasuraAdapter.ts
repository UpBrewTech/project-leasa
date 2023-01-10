/** @return { import("next-auth/adapters").Adapter } */

import {
  Adapter,
  AdapterAccount,
  AdapterUser,
  VerificationToken,
} from 'next-auth/adapters'
import { asyncSSRFetch } from './asyncSSRFetch'

const HasuraAdapter = (): Adapter<true> => {
  return {
    createUser: async (user: Omit<AdapterUser, 'id'>) => {
      const data = await asyncSSRFetch<{ user: AdapterUser }>({
        query: CREATE_USER,
        variables: { object: { ...user } },
      })

      return data.user
    },
    getUser: async (id: string) => {
      const data = await asyncSSRFetch<{ user: AdapterUser | null }>({
        query: GET_USER,
        variables: { id },
      })

      return data.user
    },
    getUserByEmail: async (email: string) => {
      const data = await asyncSSRFetch<{ users: AdapterUser[] }>({
        query: GET_USERS,
        variables: { where: { email: { _eq: email } } },
      })

      return data.users.length ? data.users[0] : null
    },
    getUserByAccount: async ({
      provider,
      providerAccountId,
    }: Pick<AdapterAccount, 'provider' | 'providerAccountId'>) => {
      const data = await asyncSSRFetch<{ users: AdapterUser[] }>({
        query: GET_USERS,
        variables: {
          where: {
            user_providers: {
              provider: { _eq: provider },
              providerAccountId: { _eq: providerAccountId },
            },
          },
        },
      })

      return data.users.length ? data.users[0] : null
    },
    updateUser: async ({ id, ...user }: Partial<AdapterUser>) => {
      const data = await asyncSSRFetch<{ user: AdapterUser }>({
        query: UPDATE_USER,
        variables: { id, _set: { ...user } },
      })

      return data.user as AdapterUser
    },
    linkAccount: async (account: AdapterAccount) => {
      const data = await asyncSSRFetch<{ provider: AdapterAccount }>({
        query: CREATE_USER_PROVIDER,
        variables: { object: { ...account } },
      })

      return data.provider
    },
    /** Creates a session for the user and returns it. */
    createSession: async (session) => {
      return session
    },
    getSessionAndUser: async () => {
      return null
    },
    updateSession: async () => {
      return null
    },
    /**
     * Deletes a session from the database.
     * It is preferred that this method also returns the session
     * that is being deleted for logging purposes.
     */
    deleteSession: async () => {
      return null
    },
    createVerificationToken: async ({
      token,
      identifier,
      expires,
    }: VerificationToken) => {
      const data = await asyncSSRFetch<{ user_token: VerificationToken }>({
        query: CREATE_USER_TOKEN,
        variables: { object: { token, identifier, expires } },
      })

      return data.user_token
    },
    /**
     * Return verification token from the database
     * and delete it so it cannot be used again.
     */
    useVerificationToken: async ({
      identifier,
      token,
    }: {
      identifier: string
      token: string
    }) => {
      const data = await asyncSSRFetch<{
        user_token: { returning: VerificationToken[] }
      }>({
        query: DELETE_USER_TOKEN,
        variables: { token, identifier },
      })

      const verificationToken = data.user_token.returning.length
        ? data.user_token.returning[0]
        : null

      return verificationToken
    },
  }
}

export default HasuraAdapter

const USER_FRAGMENT = `
  fragment User on users {
    id
    name
    email
    image
    role
  }
`

const PROVIDER_FRAGMENT = `
  fragment Provider on user_providers {
    id
    type
    scope
    userId
    id_token
    provider
    expires_at
    token_type
    oauth_token
    access_token
    refresh_token
    session_state
    providerAccountId
    oauth_token_secret
  }
`

const CREATE_USER = `
  mutation CreateUser($object: users_insert_input = {}) {
    user: insert_users_one(object: $object) {
      ...User
    }
  }

  ${USER_FRAGMENT}
`

const UPDATE_USER = `
  mutation UpdateUser($id: uuid = "", $_set: users_set_input = {}) {
    user: update_users_by_pk(pk_columns: { id: $id }, _set: $_set) {
      ...User
    }
  }

  ${USER_FRAGMENT}
`

const GET_USER = `
  query GetUser($id: uuid = "") {
    user: users_by_pk(id: $id) {
      ...User
    }
  }

  ${USER_FRAGMENT}
`

const GET_USERS = `
  query GetUsers($where: users_bool_exp = {}) {
    users(where: $where) {
      ...User
    }
  }

  ${USER_FRAGMENT}
`

const CREATE_USER_PROVIDER = `
  mutation CreateUserProvider($object: user_providers_insert_input = {}) {
    provider: insert_user_providers_one(object: $object) {
      ...Provider
    }
  }

  ${PROVIDER_FRAGMENT}
`

const CREATE_USER_TOKEN = `
  mutation CreateUserToken($object: user_tokens_insert_input = {}) {
    user_token: insert_user_tokens_one(object: $object) {
      token
      identifier
      expires
    }
  }
`

const DELETE_USER_TOKEN = `
  mutation DeleteUserToken($token: String = "", $identifier: String = "") {
    user_token: delete_user_tokens(where: {token: {_eq: $token}, identifier: {_eq: $identifier}}) {
      returning {
        token
        identifier
        expires
      }
    }
  }
`

/** @return { import("next-auth/adapters").Adapter } */

import {
  Adapter,
  AdapterAccount,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters"
import { doSSRFetch } from "utils/doSSRFetch"

const HasuraAdapter = (): Adapter<true> => {
  return {
    createUser: async (user: Omit<AdapterUser, "id">) => {
      // console.debug("createUser")

      const data = await doSSRFetch({
        query: CREATE_USER,
        variables: { object: { ...user } },
      })

      return data.user
    },
    getUser: async (id: string) => {
      // console.debug("getUser")

      const data = await doSSRFetch({
        query: GET_USER,
        variables: { id },
      })

      return data.user
    },
    getUserByEmail: async (email: string) => {
      // console.debug("getUserByEmail")

      const data = await doSSRFetch({
        query: GET_USERS,
        variables: { where: { email: { _eq: email } } },
      })

      return data.users.length ? data.users[0] : null
    },
    getUserByAccount: async ({
      provider,
      providerAccountId,
    }: Pick<AdapterAccount, "provider" | "providerAccountId">) => {
      // console.debug("getUserByAccount")

      const data = await doSSRFetch({
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
      // console.debug("updateUser")

      const data = await doSSRFetch({
        query: UPDATE_USER,
        variables: { id, _set: { ...user } },
      })

      return data.user as AdapterUser
    },
    linkAccount: async (account: AdapterAccount) => {
      // console.debug("linkAccount")

      const data = await doSSRFetch({
        query: CREATE_USER_PROVIDER,
        variables: { object: { ...account } },
      })

      return data.provider
    },
    /** Creates a session for the user and returns it. */
    createSession: async (session) => {
      // console.debug("createSession")

      return session
    },
    getSessionAndUser: async () => {
      // console.debug("getSessionAndUser")

      return null
    },
    updateSession: async () => {
      // console.debug("updateSession")

      return null
    },
    /**
     * Deletes a session from the database.
     * It is preferred that this method also returns the session
     * that is being deleted for logging purposes.
     */
    deleteSession: async () => {
      // console.debug("deleteSession")

      return null
    },
    createVerificationToken: async ({
      token,
      identifier,
      expires,
    }: VerificationToken) => {
      // console.debug("createVerificationToken")

      const data = await doSSRFetch({
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
      // console.debug("useVerificationToken")

      const data = await doSSRFetch({
        query: DELETE_USER_TOKEN,
        variables: { token, identifier },
      })

      const verificationToken = data.delete_user_tokens.returning.length
        ? data.delete_user_tokens.returning[0]
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
    delete_user_tokens(where: {token: {_eq: $token}, identifier: {_eq: $identifier}}) {
      returning {
        token
        identifier
        expires
      }
    }
  }
`

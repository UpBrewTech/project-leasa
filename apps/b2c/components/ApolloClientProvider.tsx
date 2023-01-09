import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { GraphQLWsLink } from "@apollo/client/link/subscriptions"
import { getMainDefinition } from "@apollo/client/utilities"
import { createClient } from "graphql-ws"
import { useSession } from "next-auth/react"
import { PropsWithChildren } from "react"

const isServer = typeof window === "undefined"
const HTTP_URL = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API!
const WS_URL = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API_WS!

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  const { data } = useSession()

  const authHeaders = data?.token
    ? { authorization: `Bearer ${data.token}` }
    : {}

  const authLink = setContext((_, { headers }) => {
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        ...authHeaders,
      },
    }
  })

  const httpLink = new HttpLink({ uri: HTTP_URL })

  const wsLink = isServer
    ? null
    : new GraphQLWsLink(
        createClient({
          url: WS_URL,
          connectionParams: {
            headers: authHeaders,
          },
        })
      )

  const splitLink = isServer
    ? httpLink
    : split(
        ({ query }) => {
          const definition = getMainDefinition(query)
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          )
        },
        wsLink as GraphQLWsLink,
        httpLink
      )

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(splitLink),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloClientProvider

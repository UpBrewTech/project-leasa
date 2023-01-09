const url: string = process.env.NEXT_PUBLIC_HASURA_GRAPHQL_API!
const hasuraSecret: string = process.env.HASURA_GRAPHQL_ADMIN_SECRET!

interface Options {
  query: string
  variables?: any
}

export const doSSRFetch = async (options: Options) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "x-hasura-admin-secret": hasuraSecret,
    },
    body: JSON.stringify(options),
  })

  const { data } = await response.json()

  return await data
}

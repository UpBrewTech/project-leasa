import ApolloClientProvider from "components/ApolloClientProvider"
import PageAuth from "components/PageAuth"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/globals.css"

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const allowedRoles = (Component as any).allowedRoles
  const Layout = (Component as any).getLayout

  return (
    <>
      <Head>
        <title>Leasa</title>
        <meta name="description" content="Leasa App" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </Head>
      <SessionProvider session={session} refetchInterval={0}>
        <ApolloClientProvider>
          <PageAuth allowedRoles={allowedRoles}>
            {Layout ? (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <Component {...pageProps} />
            )}
          </PageAuth>
        </ApolloClientProvider>
      </SessionProvider>
    </>
  )
}

export default App

import ApolloClientProvider from 'components/ApolloClientProvider'
import PageAuth from 'components/PageAuth'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import '../styles/globals.css'

export type AppPage = NextPage & {
  getLayout?: React.FC<PropsWithChildren>
  allowedRoles?: Role[]
}

interface Props extends AppProps {
  Component: AppPage
}

function App({ Component, pageProps: { session, ...pageProps } }: Props) {
  const allowedRoles = Component.allowedRoles
  const Layout = Component.getLayout

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

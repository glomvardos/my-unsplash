import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import StoreProvider from '../context/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Head>
        <link rel='shortcut icon' href='/favicon.png' />
        <title>My Unsplash</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}
export default MyApp

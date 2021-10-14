import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import '../styles/globals.css'
import StoreProvider from '../context/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  )
}
export default MyApp

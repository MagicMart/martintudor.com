import type { AppProps } from 'next/app'
import Page from '../components/Page'
import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  )
}
export default MyApp

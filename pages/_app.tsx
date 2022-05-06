import "~/styles/root.css"
import "~/styles/global.css"
import "~/styles/system-grid.css"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

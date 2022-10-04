import type { AppProps } from 'next/app'
import React from 'react'
import 'client/styles/global.scss'
import { clientTrpc } from 'client/client_trpc'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default clientTrpc.withTRPC(MyApp)

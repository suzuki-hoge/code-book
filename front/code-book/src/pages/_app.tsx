import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../themes'

import './style.css'
import '../components/organisms/Header/font.css'
import '../components/atoms/CodeBlock/codeblock.css'
import { cat, dog, fish, flog, penguin, rabbit } from '../types/fixture/user'
import { User } from '../types/user'

export const UserContext = React.createContext<User>(dog)

function MyApp({ Component, pageProps }: AppProps) {
  const loginUser = [cat, dog, rabbit, flog, fish, penguin][Math.floor(Math.random() * 6)]

  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
      </Head>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={loginUser}>
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </UserContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp

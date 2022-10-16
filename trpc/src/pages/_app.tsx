import type { AppProps } from 'next/app'
import React from 'react'
import 'client/styles/global.scss'
import { clientTrpc } from 'client/client_trpc'
import { userFixture } from 'client/storybook/fixtures/User'
import { User } from 'domain/User'

export const UserContext = React.createContext<User>(userFixture)

function MyApp({ Component, pageProps }: AppProps) {
  const users = clientTrpc.user.all.useQuery(undefined, {})?.data ?? []
  const user = users[Math.floor(Math.random() * users.length)]

  if (!user) {
    return <p>loading...</p>
  }

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default clientTrpc.withTRPC(MyApp)

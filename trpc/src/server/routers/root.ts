import { themeRouter } from 'server/routers/theme'
import { serverTrpc } from 'server/server_trpc'

export const appRouter = serverTrpc.router({
  theme: themeRouter,
})

export type AppRouter = typeof appRouter

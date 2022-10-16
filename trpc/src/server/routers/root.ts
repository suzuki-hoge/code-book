import { commentRouter } from 'server/routers/comment'
import { themeRouter } from 'server/routers/theme'
import { userRouter } from 'server/routers/user'
import { serverTrpc } from 'server/server_trpc'

export const appRouter = serverTrpc.router({
  theme: themeRouter,
  comment: commentRouter,
  user: userRouter,
})

export type AppRouter = typeof appRouter

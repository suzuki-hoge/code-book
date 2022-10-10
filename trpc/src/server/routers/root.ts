import { userRouter } from './user'
import { themeRouter } from 'server/routers/theme'
import { serverTrpc } from 'server/server_trpc'
import {commentRouter} from "./comment";

export const appRouter = serverTrpc.router({
  theme: themeRouter,
  comment:commentRouter,
  user: userRouter,
})

export type AppRouter = typeof appRouter

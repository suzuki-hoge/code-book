import { findAll } from '../workflow/user'
import { serverTrpc } from 'server/server_trpc'

export const userRouter = serverTrpc.router({
  all: serverTrpc.procedure.query(() => {
    return findAll()
  }),
})

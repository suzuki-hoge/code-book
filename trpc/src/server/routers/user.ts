import { serverTrpc } from 'server/server_trpc'
import { findAll } from 'server/workflow/user'

export const userRouter = serverTrpc.router({
  all: serverTrpc.procedure.query(() => {
    return findAll()
  }),
})

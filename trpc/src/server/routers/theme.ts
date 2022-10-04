import { serverTrpc } from 'server/server_trpc'

export const themeRouter = serverTrpc.router({
  all: serverTrpc.procedure.query(({ ctx }) => {
    return [{ id: 1, name: 'foo' }]
    // return ctx.task.findMany({
    //   orderBy: {
    //     createdAt: 'asc',
    //   },
    // });
  }),
})

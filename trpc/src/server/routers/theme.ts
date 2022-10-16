import { z } from 'zod'
import { serverTrpc } from 'server/server_trpc'
import { createTheme, findThemeDetail, findThemeSummaries } from 'server/workflow/theme'

export const themeRouter = serverTrpc.router({
  summaries: serverTrpc.procedure.query(() => {
    return findThemeSummaries()
  }),
  detail: serverTrpc.procedure
    .input((val: unknown) => {
      if (typeof val === 'string') return val
      throw new Error(`Invalid input: ${typeof val}`)
    })
    .query((request) => {
      return findThemeDetail(request.input)
    }),
  create: serverTrpc.procedure
    .input(
      z.object({
        id: z.string(),
        title: z.string(),
        authorId: z.string(),
      }),
    )
    .mutation(async ({ input }) => {
      return createTheme(input.id, input.title, input.authorId)
    }),
})

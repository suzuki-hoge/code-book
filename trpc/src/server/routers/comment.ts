import {z} from 'zod'
import {serverTrpc} from 'server/server_trpc'
import {createComment, updateComment} from "../workflow/comments";

export const commentRouter = serverTrpc.router({
  create: serverTrpc.procedure
    .input(z.object({
      id: z.string(),
      themeId: z.string(),
      body: z.string(),
      authorId: z.string()
    }))
    .mutation(async ({input}) => {
      return createComment(input.id, input.themeId, input.body, input.authorId)
    }),
  update: serverTrpc.procedure
    .input(z.object({
      id: z.string(),
      body: z.string(),
    }))
    .mutation(async ({input}) => {
      return updateComment(input.id, input.body)
    }),
})

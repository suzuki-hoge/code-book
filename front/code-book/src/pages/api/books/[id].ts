import { NextApiRequest, NextApiResponse } from 'next'
import { Book } from '../../../types/book'
import { _Book, _FilePart, _SnippetPart, _UrlPart } from '../types'

export type BookFindOneResponse = { book: Book }

const apply = async (req: NextApiRequest, res: NextApiResponse<BookFindOneResponse>) => {
  const { id } = req.query
  const fetched: _Book = await (await fetch(`http://localhost:8080/book/${id}`)).json()

  const book: Book = {
    id: fetched.id,
    emoji: fetched.emoji,
    title: fetched.title,
    description: fetched.description,
    author: {
      id: fetched.author.id,
      name: fetched.author.name,
      icon: fetched.author.icon,
    },
    tags: fetched.tags.map((t) => ({ name: t.name, icon: t.icon })),
    created: fetched.created,
    codes: fetched.codes.map((c) => {
      const base = {
        id: c.id,
        title: c.title,
        author: {
          id: c.author.id,
          name: c.author.name,
          icon: c.author.icon,
        },
        created: c.created,
        tags: c.tags.map((t) => ({ name: t.name, icon: t.icon })),
        comments: c.comments.map((cm) => ({
          id: cm.id,
          body: cm.body,
          author: {
            id: cm.author.id,
            name: cm.author.name,
            icon: cm.author.icon,
          },
          created: cm.created,
        })),
      }

      if (c.part.kind == 'file') {
        return {
          ...base,
          ...{
            kind: 'file',
            files: (c.part as _FilePart).files,
          },
        }
      } else if (c.part.kind == 'url') {
        return {
          ...base,
          ...{
            kind: 'url',
            url: (c.part as _UrlPart).url,
          },
        }
      } else {
        return {
          ...base,
          ...{
            kind: 'snippet',
            file: (c.part as _SnippetPart).file,
            variables: (c.part as _SnippetPart).variables,
          },
        }
      }
    }),
  }

  res.status(200).json({ book: book })
}
export default apply

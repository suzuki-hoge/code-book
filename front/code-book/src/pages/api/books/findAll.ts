import { NextApiRequest, NextApiResponse } from 'next'
import { Book } from '../../../types/book'
import { _Book } from '../types'

export type BookFindAllResponse = { books: Book[] }

const apply = async (req: NextApiRequest, res: NextApiResponse<BookFindAllResponse>) => {
  const fetched: _Book[] = await (await fetch('http://localhost:8080/books')).json()

  const books: Book[] = fetched.map((b) => ({
    id: b.id,
    emoji: b.emoji,
    title: b.title,
    description: b.description,
    author: {
      id: b.author.id,
      name: b.author.name,
      icon: b.author.icon,
    },
    tags: b.tags.map((t) => ({ name: t.name, icon: t.icon })),
    created: b.created,
    codes: [], // do not use...
  }))

  res.status(200).json({ books: books })
}
export default apply

import { Code } from './code'
import { Tag } from './tag'
import { User } from './user'

export type Book = {
  id: number
  title: string
  author: User
  tags: Tag[]
  created: Date
  cover: string | null
  codes: Code[]
}

import { Code } from './code'
import { Tag } from './tag'
import { User } from './user'

export type Book = {
  id: string
  emoji: string
  title: string
  description: string
  author: User
  tags: Tag[]
  created: string
  codes: Code[]
}

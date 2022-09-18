import { Code } from './code'
import { Tag } from './tag'
import { User } from './user'

export type Book = {
  id: number
  emoji: string
  title: string
  description: string
  author: User
  tags: Tag[]
  created: Date
  codes: Code[]
}

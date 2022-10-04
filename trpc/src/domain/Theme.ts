import { Comment } from 'domain/Comment'
import { User } from 'domain/User'

export type Theme = {
  id: string
  title: string
  created: string
  description: Comment
  comments: number
  author: User
}

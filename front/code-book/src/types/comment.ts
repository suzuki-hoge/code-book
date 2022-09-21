import { User } from './user'

export type Comment = {
  id: string
  body: string
  author: User
  created: string
}

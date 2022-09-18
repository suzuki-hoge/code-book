import { User } from './user'

export type Comment = {
  id: number
  body: string
  author: User
  created: Date
}

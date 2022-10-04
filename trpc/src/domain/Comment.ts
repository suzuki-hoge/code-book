import { User } from 'domain/User'

export type Comment = {
  id: string
  body: string
  created: string
  author: User
}

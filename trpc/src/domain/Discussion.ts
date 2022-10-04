import { User } from 'domain/User'

export type Discussion = {
  id: string
  body: string
  created: string
  author: User
}

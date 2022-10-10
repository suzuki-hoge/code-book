import { User } from 'domain/User'

export type Comment = {
  id: string
  themeId: string
  body: string
  created: string
  author: User
}

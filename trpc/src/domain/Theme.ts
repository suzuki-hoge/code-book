import { Comment } from 'domain/Comment'
import { User } from 'domain/User'

export type ThemeCore = {
  id: string
  title: string
  created: string
  commentCount: number
  author: User
}

export type ThemeSummary = ThemeCore & {
  firstComment: Comment | undefined
}

export type ThemeDetail = ThemeCore & {
  comments: Comment[]
}

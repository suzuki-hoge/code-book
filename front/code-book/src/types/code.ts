import { Tag } from './tag'
import { User } from './user'

export type Code = {
  id: number
  title: string
  author: User
  created: Date
  comments: Comment[]
  kind: 'file' | 'url' | 'snippet'
  body: FileCode[] | UrlCode | SnippetCode
}

export type Comment = {
  id: number
  body: string
  author: User
  created: Date
}

export type FileCode = {
  id: number
  filename: string
  body: string
  tag: Tag
}

export type UrlCode = {
  id: number
  url: string
  tags: Tag[]
}

export type SnippetCode = {
  id: number
  name: string
  body: string
  tag: Tag
  varKeys: string[]
  varVals: string[]
}

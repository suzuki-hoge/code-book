import { Comment } from './comment'
import { Tag } from './tag'
import { User } from './user'

export type Code = FileCode | UrlCode | SnippetCode

type CodeBase = {
  id: string
  title: string
  author: User
  created: Date
  tags: Tag[]
  comments: Comment[]
}

type File = {
  name: string
  text: string
}

export type FileCode = CodeBase & {
  kind: 'file'
  files: File[]
}

export type UrlCode = CodeBase & {
  kind: 'url'
  url: string
}

export type Variable = {
  name: string
  value: string
}

export type SnippetCode = CodeBase & {
  kind: 'snippet'
  file: File
  variables: Variable[]
}

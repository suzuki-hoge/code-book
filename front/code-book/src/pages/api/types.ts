export type _Book = {
  id: string
  emoji: string
  title: string
  description: string
  author: _User
  tags: _Tag[]
  created: string
  codes: _Code[]
}

type _File = {
  name: string
  text: string
}

export type _FilePart = {
  kind: 'file'
  files: _File[]
}

export type _UrlPart = {
  kind: 'url'
  url: string
}

export type _SnippetPart = {
  kind: 'snippet'
  file: _File
  variables: {
    name: string
    value: string
  }[]
}

export type _Code = {
  id: string
  title: string
  created: string
  author: _User
  tags: _Tag[]
  comments: _Comment[]
  part: _FilePart | _UrlPart | _SnippetPart
}

export type _Comment = {
  id: string
  body: string
  created: string
  author: _User
}

export type _User = {
  id: string
  name: string
  icon: string
}

export type _Tag = {
  name: string
  icon: string
}

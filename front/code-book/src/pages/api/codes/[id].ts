import { NextApiRequest, NextApiResponse } from 'next'
import { Code } from '../../../types/code'
import { _Code, _FilePart, _SnippetPart, _UrlPart } from '../types'

export type CodeFindOneResponse = { code: Code }

const apply = async (req: NextApiRequest, res: NextApiResponse<CodeFindOneResponse>) => {
  const { id } = req.query
  const fetched: _Code = await (await fetch(`http://localhost:8080/code/${id}`)).json()

  let code: Code
  const base = {
    id: fetched.id,
    title: fetched.title,
    author: {
      id: fetched.author.id,
      name: fetched.author.name,
      icon: fetched.author.icon,
    },
    created: fetched.created,
    tags: fetched.tags.map((t) => ({ name: t.name, icon: t.icon })),
    comments: fetched.comments.map((cm) => ({
      id: cm.id,
      body: cm.body,
      author: {
        id: cm.author.id,
        name: cm.author.name,
        icon: cm.author.icon,
      },
      created: cm.created,
    })),
  }

  if (fetched.part.kind == 'file') {
    code = {
      ...base,
      ...{
        kind: 'file',
        files: (fetched.part as _FilePart).files,
      },
    }
  } else if (fetched.part.kind == 'url') {
    code = {
      ...base,
      ...{
        kind: 'url',
        url: (fetched.part as _UrlPart).url,
      },
    }
  } else {
    code = {
      ...base,
      ...{
        kind: 'snippet',
        file: (fetched.part as _SnippetPart).file,
        variables: (fetched.part as _SnippetPart).variables,
      },
    }
  }

  res.status(200).json({ code: code })
}
export default apply

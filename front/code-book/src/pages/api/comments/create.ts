import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export type CommentCreateResponse = { codeId: string }

const apply = async (req: NextApiRequest, res: NextApiResponse<CommentCreateResponse>) => {
  const posted = await axios.post('http://localhost:8080/comment', req.body)

  res.status(200).json({ codeId: posted.data.id })
}
export default apply

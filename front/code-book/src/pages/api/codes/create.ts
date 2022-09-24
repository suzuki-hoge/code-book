import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export type CodeCreateResponse = { codeId: string }

const apply = async (req: NextApiRequest, res: NextApiResponse<CodeCreateResponse>) => {
  const posted = await axios.post('http://localhost:8080/code', req.body)

  res.status(200).json({ codeId: posted.data.id })
}
export default apply

import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export type BookCreateResponse = { bookId: string }

const apply = async (req: NextApiRequest, res: NextApiResponse<BookCreateResponse>) => {
  const posted = await axios.post('http://localhost:8080/book', req.body)

  res.status(200).json({ bookId: posted.data.id })
}
export default apply

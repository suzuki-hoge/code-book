import { useEffect, useState } from 'react'
import { BookList } from '../../components/templates/BookList'
import { Frame } from '../../components/templates/Frame'
import { Book } from '../../types/book'
import { fullBook } from '../../types/fixture/book'
import { cat } from '../../types/fixture/user'

const Page = () => {
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    setBooks([fullBook, fullBook, fullBook])
  }, [])

  return (
    <Frame user={cat}>
      <BookList books={books} />
    </Frame>
  )
}

export default Page

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { BookDetail } from '../../components/templates/BookDetail'
import { Frame } from '../../components/templates/Frame'
import { Book } from '../../types/book'
import { fullBook } from '../../types/fixture/book'
import { cat } from '../../types/fixture/user'

const Page = () => {
  const bookId = useRouter().query.id as string
  const [book, setBook] = useState<Book>()

  useEffect(() => {
    setBook({ '1': fullBook }[bookId])
  }, [bookId])

  return <Frame user={cat}>{book && <BookDetail book={book} />}</Frame>
}

export default Page

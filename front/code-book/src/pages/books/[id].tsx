import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { CodeForm } from '../../components/organisms/code/CodeForm'
import { FootSlider } from '../../components/templates/FootSlider'
import { Frame } from '../../components/templates/Frame'
import { BookDetail } from '../../components/templates/book/BookDetail'
import { Book } from '../../types/book'
import { fullBook1, fullBook2 } from '../../types/fixture/book'
import { UserContext } from '../_app'

const Page = () => {
  const user = useContext(UserContext)

  const bookId = useRouter().query.id as string
  const [book, setBook] = useState<Book>()

  useEffect(() => {
    if (bookId == fullBook1.id) {
      setBook(fullBook1)
    }
    if (bookId == fullBook2.id) {
      setBook(fullBook2)
    }
  }, [bookId])

  return (
    <Frame user={user}>
      {book && <BookDetail book={book} />}
      <FootSlider title="New Code">
        <CodeForm user={user} bookId={bookId} />
      </FootSlider>
    </Frame>
  )
}

export default Page

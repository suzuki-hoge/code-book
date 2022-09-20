import { useContext, useEffect, useState } from 'react'
import { BookForm } from '../../components/organisms/book/BookForm'
import { FootSlider } from '../../components/templates/FootSlider'
import { Frame } from '../../components/templates/Frame'
import { BookList } from '../../components/templates/book/BookList'
import { Book } from '../../types/book'
import { fullBook1, fullBook2 } from '../../types/fixture/book'
import { UserContext } from '../_app'

const Page = () => {
  const user = useContext(UserContext)

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    setBooks([fullBook1, fullBook2])
  }, [])

  return (
    <Frame user={user}>
      <BookList books={books} />
      <FootSlider title="New Book">
        <BookForm user={user} />
      </FootSlider>
    </Frame>
  )
}

export default Page

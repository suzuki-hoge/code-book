import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { BookForm } from '../../components/organisms/book/BookForm'
import { FootSlider } from '../../components/templates/FootSlider'
import { Frame } from '../../components/templates/Frame'
import { BookList } from '../../components/templates/book/BookList'
import { BookFindAllResponse } from '../api/books/findAll'

const Page = () => {
  const { status, data } = useQuery([], async () => (await axios.get<BookFindAllResponse>('/api/books/findAll')).data)

  if (status == 'loading') {
    return <p>Loading...</p>
  }

  if (status == 'success') {
    return (
      <Frame>
        <BookList books={data.books} />
        <FootSlider title="New Book">
          <BookForm />
        </FootSlider>
      </Frame>
    )
  }
}

export default Page

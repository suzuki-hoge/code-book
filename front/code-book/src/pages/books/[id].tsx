import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import { CodeForm } from '../../components/organisms/code/CodeForm'
import { FootSlider } from '../../components/templates/FootSlider'
import { Frame } from '../../components/templates/Frame'
import { BookDetail } from '../../components/templates/book/BookDetail'
import { BookFindOneResponse } from '../api/books/[id]'

const Page = () => {
  const bookId = useRouter().query.id as string

  const { status, data } = useQuery([], async () => (await axios.get<BookFindOneResponse>(`/api/books/${bookId}`)).data)

  if (status == 'loading') {
    return <p>Loading...</p>
  }

  if (status == 'success') {
    return (
      <Frame>
        {<BookDetail book={data.book} />}
        <FootSlider title="New Code">
          <CodeForm bookId={bookId} />
        </FootSlider>
      </Frame>
    )
  }
}

export default Page

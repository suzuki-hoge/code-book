import { Book } from '../../../types/book'
import { ContentDiv } from '../../molecules/ContentDiv'
import { VerticalItems } from '../../molecules/VerticalItems'
import { BookHeader } from '../../organisms/BookHeader'

type Props = {
  books: Book[]
}

export const BookList = ({ books }: Props) => {
  return (
    <>
      <VerticalItems>
        {books.map((book) => (
          <ContentDiv key={book.id}>
            <BookHeader key={book.id} book={book} link={true} variant={'small'} />
          </ContentDiv>
        ))}
      </VerticalItems>
    </>
  )
}

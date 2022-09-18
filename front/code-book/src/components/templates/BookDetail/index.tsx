import styled from 'styled-components'
import { Book } from '../../../types/book'
import { ContentDiv } from '../../molecules/ContentDiv'
import { VerticalItems } from '../../molecules/VerticalItems'
import { BookHeader } from '../../organisms/BookHeader'
import { CodeHeader } from '../../organisms/CodeHeader'

type Props = {
  book: Book
}

const Div = styled.div`
  margin-bottom: 1.5em;
`

const Line = styled.hr`
  width: 100%;
`

export const BookDetail = ({ book }: Props) => {
  return (
    <>
      <Div>
        <BookHeader book={book} variant={'medium'} />
      </Div>

      <VerticalItems>
        <ContentDiv>{book.description}</ContentDiv>

        <Line />

        {book.codes.map((code) => (
          <ContentDiv key={code.id}>
            <CodeHeader key={code.id} code={code} variant={'small'} />
          </ContentDiv>
        ))}
      </VerticalItems>
    </>
  )
}

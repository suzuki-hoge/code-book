import styled from 'styled-components'
import { Book } from '../../../../types/book'
import { device } from '../../../device'
import { ContentDiv } from '../../../molecules/ContentDiv'
import { VerticalItems } from '../../../molecules/VerticalItems'
import { BookHeader } from '../../../organisms/book/BookHeader'
import { CodeHeader } from '../../../organisms/code/CodeHeader'

type Props = {
  book: Book
}

const Div = styled.div`
  margin-bottom: 1.5em;

  @media ${device.sp} {
    padding: 0 1em;
  }
`

const Line = styled.hr`
  width: 100%;
`

export const BookDetail = ({ book }: Props) => {
  return (
    <>
      <Div>
        <BookHeader book={book} link={false} variant={'medium'} />
      </Div>

      <VerticalItems>
        <ContentDiv>{book.description}</ContentDiv>

        <Line />

        {book.codes.map((code) => (
          <ContentDiv key={code.id}>
            <CodeHeader key={code.id} code={code} link={true} variant={'small'} />
          </ContentDiv>
        ))}
      </VerticalItems>
    </>
  )
}

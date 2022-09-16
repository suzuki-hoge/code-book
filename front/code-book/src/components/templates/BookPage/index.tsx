import styled from 'styled-components'
import { Book } from '../../../types/book'
import { IconText } from '../../molecules/IconText'
import { CodeItem } from '../../organisms/CodeItem'
import { Horizon } from 'components/utils/Horizon'

type Props = {
  book: Book
}

const ContentDiv = styled.div`
  background-color: ${(props) => props.theme.colors.content};
  padding: 1em;
  margin: 1em 0 2em 0;
  border-radius: 8px;
`

const Cover = styled.img`
  width: 50px;
  height: 50px;
`

export const BookPage = ({ book }: Props) => {
  return (
    <>
      <Horizon>
        <Cover src={book.cover ? book.cover : 'https://static.thenounproject.com/png/340719-200.png'} />
        <h1>{book.title}</h1>
      </Horizon>
      <Horizon>
        {book.tags.map((tag) => (
          <IconText key={tag.id} href={'#'} icon={tag.icon} text={tag.name} variant={'small'} />
        ))}
      </Horizon>
      {book.codes.map((code) => (
        <ContentDiv key={code.id}>
          <CodeItem key={code.id} code={code} />
        </ContentDiv>
      ))}
    </>
  )
}

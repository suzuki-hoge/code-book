import styled from 'styled-components'
import { Book } from '../../../types/book'
import { IconText } from '../../molecules/IconText'
import { Horizon } from 'components/utils/Horizon'

type Props = {
  book: Book
}

const Cover = styled.img`
  width: 240px;
  height: 240px;
`

export const BookCover = ({ book }: Props) => {
  return (
    <>
      <h1>{book.title}</h1>
      <Cover src={book.cover ? book.cover : 'https://static.thenounproject.com/png/340719-200.png'} />
      <Horizon>
        {book.tags.map((tag) => (
          <IconText key={tag.id} href={'#'} icon={tag.icon} text={tag.name} variant={'small'} />
        ))}
      </Horizon>
    </>
  )
}

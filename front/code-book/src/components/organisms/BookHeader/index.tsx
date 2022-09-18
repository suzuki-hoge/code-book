import styled from 'styled-components'
import { theme } from '../../../themes'
import { Book } from '../../../types/book'
import { DateText } from '../../atoms/DateText'
import { Icon } from '../../atoms/Icon'
import { HeaderItem } from '../../molecules/HeaderItem'
import { HorizonItems } from '../../molecules/HorizonItems'
import { IconText } from '../../molecules/IconText'

type Props = {
  book: Book

  variant: 'small' | 'medium'
}

const emojiSizes = {
  small: theme.fontSizes.fs6,
  medium: theme.fontSizes.fs8,
}

const titleSizes = {
  small: theme.fontSizes.fs3,
  medium: theme.fontSizes.fs5,
}

const Emoji = styled.span<{ variant: 'small' | 'medium' }>`
  font-size: ${(props) => emojiSizes[props.variant]};
`

const Title = styled.div<{ variant: 'small' | 'medium' }>`
  font-size: ${(props) => titleSizes[props.variant]};
  font-weight: bold;
`

export const BookHeader = ({ book, variant }: Props) => {
  return (
    <>
      <HeaderItem>
        <IconText icon={book.author.icon} text={book.author.name} variant={'small'} />
        <DateText date={book.created} variant={'small'} />
      </HeaderItem>

      <HorizonItems>
        <Emoji variant={variant}>{book.emoji}</Emoji>
        <div>
          <Title variant={variant}>{book.title}</Title>
          <HorizonItems>
            {book.tags.map((tag) => (
              <Icon key={tag.name} icon={tag.icon} variant={variant} />
            ))}
          </HorizonItems>
        </div>
      </HorizonItems>
    </>
  )
}

import styled from 'styled-components'
import { Comment } from '../../../types/comment'
import { DateText } from '../../atoms/DateText'
import { HeaderItem } from '../../molecules/HeaderItem'
import { IconText } from '../../molecules/IconText'

type Props = {
  comment: Comment
}

const Body = styled.div`
  margin-top: 1em;
  white-space: pre-line;
`

export const CommentItem = ({ comment }: Props) => {
  return (
    <>
      <HeaderItem>
        <IconText icon={comment.author.icon} text={comment.author.name} variant={'small'} />
        <DateText date={comment.created} variant={'small'} />
      </HeaderItem>
      <Body>{comment.body}</Body>
    </>
  )
}

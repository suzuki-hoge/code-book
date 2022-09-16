import styled from 'styled-components'
import { theme } from '../../../themes'
import { Comment as CommentType } from '../../../types/code'
import { DateText } from '../../atoms/DateText'
import { IconText } from '../../molecules/IconText'

type Props = {
  comment: CommentType
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5em;
`

const Span = styled.span`
  white-space: pre-line;
`
const Line = styled.hr`
  margin: 1em 0;
`

export const Comment = ({ comment }: Props) => {
  return (
    <>
      <HeaderDiv>
        <IconText href="#" icon={comment.author.icon} text={comment.author.name} variant={'small'} />
        <DateText date={comment.created} size={theme.fontSizes.fs2} />
      </HeaderDiv>
      <Line />
      <Span>{comment.body}</Span>
    </>
  )
}

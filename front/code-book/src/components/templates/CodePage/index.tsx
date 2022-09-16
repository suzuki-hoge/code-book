import styled from 'styled-components'
import { theme } from '../../../themes'
import { Code, FileCode, UrlCode, SnippetCode } from '../../../types/code'
import { DateText } from '../../atoms/DateText'
import { IconText } from '../../molecules/IconText'
import { Comment } from '../../organisms/Comment'
import { FileCode as FileCodeTag } from '../../organisms/FileCode'
import { SnippetCode as SnippetCodeTag } from '../../organisms/SnippetCode'
import { UrlCode as UrlCodeTag } from '../../organisms/UrlCode'

type Props = {
  code: Code
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5em;
`

const ContentDiv = styled.div`
  background-color: ${(props) => props.theme.colors.content};
  padding: 1em;
  margin: 1em 0 2em 0;
  border-radius: 8px;
`

export const CodePage = ({ code }: Props) => {
  return (
    <>
      <HeaderDiv>
        <IconText href={'#'} icon={code.author.icon} text={code.author.name} variant={'medium'} />
        <DateText date={code.created} size={theme.fontSizes.fs2} />
      </HeaderDiv>
      <h1>{code.title}</h1>
      <ContentDiv>
        {code.kind == 'file' && <FileCodeTag code={code.body as FileCode[]} />}
        {code.kind == 'url' && <UrlCodeTag code={code.body as UrlCode} />}
        {code.kind == 'snippet' && <SnippetCodeTag code={code.body as SnippetCode} />}
      </ContentDiv>
      {code.comments.map((comment) => (
        <ContentDiv key={comment.id}>
          <Comment key={comment.id} comment={comment} />
        </ContentDiv>
      ))}
    </>
  )
}

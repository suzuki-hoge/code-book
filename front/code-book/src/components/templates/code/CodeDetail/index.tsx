import styled from 'styled-components'
import { Code } from '../../../../types/code'
import { device } from '../../../device'
import { ContentDiv } from '../../../molecules/ContentDiv'
import { VerticalItems } from '../../../molecules/VerticalItems'
import { CodeHeader } from '../../../organisms/code/CodeHeader'
import { FileCodeItem } from '../../../organisms/code/FileCodeItem'
import { SnippetCodeItem } from '../../../organisms/code/SnippetCodeItem'
import { UrlCodeItem } from '../../../organisms/code/UrlCodeItem'
import { CommentItem } from '../../../organisms/comment/CommentItem'

type Props = {
  code: Code
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

const CodeItem = (code: Code) => {
  switch (code.kind) {
    case 'file':
      return <FileCodeItem code={code} />
    case 'url':
      return <UrlCodeItem code={code} />
    case 'snippet':
      return <SnippetCodeItem code={code} />
  }
}

export const CodeDetail = ({ code }: Props) => {
  return (
    <>
      <Div>
        <CodeHeader code={code} link={false} variant={'medium'} />
      </Div>

      <VerticalItems>
        <ContentDiv>{CodeItem(code)}</ContentDiv>

        {code.comments.length != 0 && <Line />}

        <VerticalItems>
          {code.comments.map((comment) => (
            <ContentDiv key={comment.id}>
              <CommentItem key={comment.id} comment={comment} />
            </ContentDiv>
          ))}
        </VerticalItems>
      </VerticalItems>
    </>
  )
}

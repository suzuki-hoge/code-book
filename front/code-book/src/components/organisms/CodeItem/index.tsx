import styled from 'styled-components'
import { theme } from '../../../themes'
import { Code } from '../../../types/code'
import { DateText } from '../../atoms/DateText'
import { IconText } from '../../molecules/IconText'

type Props = {
  code: Code
}

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5em;
`

const Span = styled.div`
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.fs3};
  margin-top: 0.5em;
`

export const CodeItem = ({ code }: Props) => {
  return (
    <>
      <HeaderDiv>
        <IconText href={'#'} icon={code.author.icon} text={code.author.name} variant={'small'} />
        <DateText date={code.created} size={theme.fontSizes.fs2} />
      </HeaderDiv>
      <a href={`code/code.id`}>
        <Span>{code.title}</Span>
      </a>
    </>
  )
}

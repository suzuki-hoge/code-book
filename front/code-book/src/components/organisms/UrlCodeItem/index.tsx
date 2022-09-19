import styled from 'styled-components'
import { UrlCode } from '../../../types/code'

type Props = {
  code: UrlCode
}

const A = styled.a`
  color: #00e;
  text-decoration-line: underline;
  &:visited {
    color: #00e;
  }
`

export const UrlCodeItem = ({ code }: Props) => {
  return <A href={code.url} target="_blank" rel="noreferrer noopenner">{code.url}</A>
}

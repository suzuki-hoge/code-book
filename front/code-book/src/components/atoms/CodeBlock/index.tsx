import styled from 'styled-components'

type Props = {
  body: string
}

const Pre = styled.pre`
  background-color: ${(props) => props.theme.colors.highlight};
  border-radius: 8px;
  padding: 0.5em 1em 0.5em 1em;
  display: block;
  overflow-x: auto;
`

export const CodeBlock = ({ body }: Props) => <Pre>{body}</Pre>

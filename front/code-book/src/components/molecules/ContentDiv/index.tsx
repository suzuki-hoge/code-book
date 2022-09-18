import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Div = styled.div`
  background-color: ${(props) => props.theme.colors.content};
  padding: 1em;
  border-radius: 8px;
`

export const ContentDiv = ({ children }: Props) => {
  return <Div>{children}</Div>
}

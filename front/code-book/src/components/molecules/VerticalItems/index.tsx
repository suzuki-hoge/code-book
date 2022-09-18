import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Div = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 1.5em;
`

export const VerticalItems = ({ children }: Props) => {
  return <Div>{children}</Div>
}

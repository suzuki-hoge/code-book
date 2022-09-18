import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5em;
`

export const HeaderItem = ({ children }: Props) => {
  return <Div>{children}</Div>
}

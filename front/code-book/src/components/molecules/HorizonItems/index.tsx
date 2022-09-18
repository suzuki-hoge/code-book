import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 0.5em;
`

export const HorizonItems = ({ children }: Props) => {
  return <Div>{children}</Div>
}

import { ReactNode } from 'react'
import styled from 'styled-components'
import { device } from '../../device'

type Props = {
  children: ReactNode
}

const Div = styled.div`
  background-color: ${(props) => props.theme.colors.content};
  padding: 1em;
  @media ${device.pc} {
    border-radius: 8px;
  }
`

export const ContentDiv = ({ children }: Props) => {
  return <Div>{children}</Div>
}

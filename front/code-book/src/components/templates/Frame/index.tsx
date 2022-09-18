import { ReactNode } from 'react'
import styled from 'styled-components'
import { User } from '../../../types/user'
import { Header } from '../../organisms/Header'

type Props = {
  user: User
  children: ReactNode
}

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  margin: 0;
  padding-bottom: 1em;
`

const HeaderArea = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.content};
  padding: 1em 0;
`

const HeaderContentArea = styled.div`
  max-width: 840px;
  //background-color: ${(props) => props.theme.colors.content};
  margin: 0 auto;
  padding: 0 1em;
`

const MainContent = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 1em 0;
`

export const Frame = ({ user, children }: Props) => {
  return (
    <Content>
      <HeaderArea>
        <HeaderContentArea>
          <Header user={user} />
        </HeaderContentArea>
      </HeaderArea>

      <MainContent>{children}</MainContent>
    </Content>
  )
}

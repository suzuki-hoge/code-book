import { ReactNode } from 'react'
import styled from 'styled-components'
import { User } from '../../../types/user'
import { device } from '../../device'
import { Header } from '../../organisms/Header'

type Props = {
  user: User
  children: ReactNode
}

const HeaderArea = styled.div`
  margin: 0;
  padding-top: 1em;

  @media ${device.sp} {
    padding-left: 1em;
    padding-right: 1em;
  }
  @media ${device.pc} {
    padding-left: 40px;
    padding-right: 40px;
  }
`

const HeaderContentArea = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding-bottom: 1em;
`

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding-top: 1em;
  margin: 0;

  @media ${device.pc} {
    padding-left: 40px;
    padding-right: 40px;
  }
`

const MainContent = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 1em 0;
`

export const Frame = ({ user, children }: Props) => {
  return (
    <>
      <HeaderArea>
        <HeaderContentArea>
          <Header user={user} />
        </HeaderContentArea>
      </HeaderArea>

      <Content>
        <MainContent>{children}</MainContent>
      </Content>
    </>
  )
}

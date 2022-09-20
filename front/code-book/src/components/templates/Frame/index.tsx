import Link from 'next/link'
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

const A = styled.a`
  cursor: pointer;
  color: black;

  &:visited {
    color: black;
  }
`

const Content = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 1em 0;
  margin: 0;
  min-height: calc(100vh - 72px - 2em);

  @media ${device.pc} {
    padding-left: 40px;
    padding-right: 40px;
  }
`

const MainContent = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 1em 0 4em 0;
`

export const Frame = ({ user, children }: Props) => {
  return (
    <>
      <HeaderArea id="header-area">
        <HeaderContentArea>
          <Link href="/">
            <A>
              <Header user={user} />
            </A>
          </Link>
        </HeaderContentArea>
      </HeaderArea>

      <Content>
        <MainContent>{children}</MainContent>
      </Content>
    </>
  )
}

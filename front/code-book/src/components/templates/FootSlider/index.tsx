import { faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSProperties, ReactNode, useState } from 'react'
import styled from 'styled-components'
import { device } from '../../device'
import { HeaderItem } from '../../molecules/HeaderItem'

type Props = {
  title: string
  children: ReactNode
}

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 880px;
  margin: 0 auto;
  border-top: #aaa 1px solid;
  border-left: #aaa 1px solid;
  border-right: #aaa 1px solid;

  @media ${device.sp} {
    left: 0;
    right: 0;
  }
  @media ${device.pc} {
    left: 40px;
    right: 40px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
  box-shadow: 0 0 7px #888;
`

const ButtonArea = styled.div`
  background-color: ${(props) => props.theme.colors.content};
  cursor: pointer;
  font-size: 1.2em;
  font-weight: 600;
  padding: 0.5em;

  @media ${device.pc} {
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
`

const ContentArea = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  overflow: auto;
  padding: 0 1em;
`

export const FootSlider = ({ title, children }: Props) => {
  const [open, setOpen] = useState(false)
  const [mark, setMark] = useState(faAngleDoubleUp)
  const toggle = () => {
    setMark(open ? faAngleDoubleUp : faAngleDoubleDown)
    setOpen(!open)
  }

  const style: CSSProperties = {
    height: open ? window.innerHeight * 0.7 : '0px',
    transitionProperty: 'height',
    transitionDuration: '0.5s',
  }

  return (
    <Footer>
      <ButtonArea onClick={toggle}>
        <HeaderItem>
          <span>{title}</span>
          <FontAwesomeIcon icon={mark} size={'1x'} />
        </HeaderItem>
      </ButtonArea>
      <ContentArea style={style}>{children}</ContentArea>
    </Footer>
  )
}

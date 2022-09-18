import styled from 'styled-components'
import { User } from '../../../types/user'
import { Icon } from '../../atoms/Icon'
import { HeaderItem } from '../../molecules/HeaderItem'

type Props = {
  user: User
}

const Logo = styled.span`
  font-size: ${(props) => props.theme.fontSizes.fs3};
  font-family: Coustard, serif;
`

export const Header = ({ user }: Props) => {
  return (
    <HeaderItem>
      <Logo>Code Book</Logo>
      <Icon icon={user.icon} variant={'large'} />
    </HeaderItem>
  )
}

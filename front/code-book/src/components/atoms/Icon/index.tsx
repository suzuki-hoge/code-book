import styled from 'styled-components'
import { theme } from '../../../themes'

type Props = {
  icon: string

  variant: 'small' | 'medium' | 'large'
}

const sizes = {
  small: theme.fontSizes.fs3,
  medium: theme.fontSizes.fs4,
  large: theme.fontSizes.fs5,
}

const Img = styled.img<{ variant: 'small' | 'medium' | 'large' }>`
  height: ${(props) => sizes[props.variant]};
  width: ${(props) => sizes[props.variant]};
  border-radius: 50%;
  display: block;
  background-color: ${(props) => props.theme.colors.content};
`

export const Icon = ({ icon, variant }: Props) => {
  return <Img src={icon} variant={variant} />
}

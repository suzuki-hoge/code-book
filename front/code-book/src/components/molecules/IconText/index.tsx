import styled from 'styled-components'
import { theme } from '../../../themes'
import { Icon } from '../../atoms/Icon'

type Props = {
  href: string
  icon: string
  text: string
  variant: 'small' | 'medium'
}

const sizes = {
  small: { font: theme.fontSizes.fs2, icon: theme.iconSizes.is3 },
  medium: { font: theme.fontSizes.fs3, icon: theme.iconSizes.is4 },
}

const A = styled.a`
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`

const Text = styled.p<{ variant: 'small' | 'medium' }>`
  margin: 0 0 0 3px;
  font-size: ${(props) => sizes[props.variant].font};
`

export const IconText = ({ href, icon, text, variant }: Props) => {
  return (
    <A href={href}>
      <Icon src={icon} size={sizes[variant].icon} />
      <Text variant={variant}>{text}</Text>
    </A>
  )
}

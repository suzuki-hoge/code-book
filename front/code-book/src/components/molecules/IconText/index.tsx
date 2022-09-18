import styled from 'styled-components'
import { theme } from '../../../themes'
import { Icon } from '../../atoms/Icon'

type Props = {
  icon: string
  text: string

  variant: 'small' | 'medium'
}

const sizes = {
  small: { font: theme.fontSizes.fs2, icon: theme.iconSizes.is3 },
  medium: { font: theme.fontSizes.fs3, icon: theme.iconSizes.is4 },
}

const Span = styled.span`
  display: flex;
  align-items: center;
`

const Text = styled.p<{ variant: 'small' | 'medium' }>`
  margin: 0 0 0 0.3em;
  font-size: ${(props) => sizes[props.variant].font};
`

export const IconText = ({ icon, text, variant }: Props) => {
  return (
    <Span>
      <Icon icon={icon} variant={variant} />
      <Text variant={variant}>{text}</Text>
    </Span>
  )
}

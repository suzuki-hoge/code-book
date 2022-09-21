import styled from 'styled-components'
import { theme } from '../../../themes'

type Props = {
  date: string

  variant: 'small' | 'medium'
}

const sizes = {
  small: theme.fontSizes.fs2,
  medium: theme.fontSizes.fs3,
}

const Span = styled.span<{ variant: 'small' | 'medium' }>`
  font-size: ${(props) => sizes[props.variant]};
`

export const DateText = ({ date, variant }: Props) => {
  return <Span variant={variant}>{date}</Span>
}

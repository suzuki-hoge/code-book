import styled from 'styled-components'
import { theme } from '../../../themes'

type Props = {
  value: string
  variant: 'primary' | 'sub' | 'caution'
  onclick: (event: React.MouseEvent<HTMLInputElement>) => void
}

const colors = {
  primary: theme.colors.primary,
  sub: theme.colors.sub,
  caution: theme.colors.caution,
}

const Input = styled.input<{ variant: 'primary' | 'sub' | 'caution' }>`
  background-color: ${(props) => colors[props.variant]};
  border-radius: 8px;
  padding: 0.5em 1em 0.5em 1em;
`

export const Button = ({ value, variant, onclick }: Props) => {
  return <Input type="button" value={value} variant={variant} onClick={onclick} />
}
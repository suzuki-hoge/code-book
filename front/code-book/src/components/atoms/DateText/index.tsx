import { format } from 'date-fns'
import styled from 'styled-components'

type Props = {
  date: Date

  size: string
}

const Span = styled.span<Omit<Props, 'date'>>`
  font-size: ${(props) => props.size};
`

export const DateText = ({ date, size }: Props) => <Span size={size}>{format(date, 'yyyy/MM/dd hh:mm')}</Span>

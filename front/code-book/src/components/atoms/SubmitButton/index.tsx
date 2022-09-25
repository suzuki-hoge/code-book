import React from 'react'
import styled from 'styled-components'

type Props = {
  value: string
  enabled: boolean
}

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 8px;
  padding: 0.5em 1em 0.5em 1em;
  cursor: pointer;
`

export const SubmitButton = ({ value, enabled }: Props) => {
  return <Input type="submit" value={value} disabled={!enabled} />
}

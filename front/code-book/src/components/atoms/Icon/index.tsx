import styled from 'styled-components'

type Props = {
  src: string

  size: string
}

const Img = styled.img<Omit<Props, 'href'>>`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;
  display: block;
`

export const Icon = ({ src, size }: Props) => <Img src={src} size={size} />

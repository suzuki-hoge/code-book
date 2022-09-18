import { UrlCode } from '../../../types/code'

type Props = {
  code: UrlCode
}

export const UrlCodeItem = ({ code }: Props) => {
  return <a href={code.url}>{code.url}</a>
}

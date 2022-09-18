import ReactMarkdown from 'react-markdown'
import { Code } from './Code'

type Props = {
  filename: string
  text: string
}

const surround = (filename: string, text: string) =>
  ['```' + `${filename.split('.').slice(-1)[0]}:${filename}`, text, '```'].join('\n')

export const CodeBlock = ({ filename, text }: Props) => {
  return (
    <div className={'code-book-code-block'}>
      <ReactMarkdown components={{ code: Code }}>{surround(filename, text)}</ReactMarkdown>
    </div>
  )
}

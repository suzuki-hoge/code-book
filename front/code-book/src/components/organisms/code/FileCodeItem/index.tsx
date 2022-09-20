import { FileCode } from '../../../../types/code'
import { CodeBlock } from '../../../atoms/CodeBlock'
import { VerticalItems } from '../../../molecules/VerticalItems'

type Props = {
  code: FileCode
}

export const FileCodeItem = ({ code }: Props) => {
  return (
    <VerticalItems>
      {code.files.map((file) => (
        <CodeBlock key={file.name} filename={file.name} text={file.text} />
      ))}
    </VerticalItems>
  )
}
